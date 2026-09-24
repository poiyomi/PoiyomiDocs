// Remark plugin for Strict Heading IDs (Docusaurus 3.10+).
//
// Custom heading IDs use the strict MDX comment syntax, which Docusaurus reads on its own:
//
//   ## My Heading {/* #my-id */}
//
// This plugin runs right before Docusaurus assigns heading IDs (see `beforeDefaultRemarkPlugins` in
// docusaurus.config.ts) and patches the gaps around it:
//
// - Fallback IDs: headings without a custom ID still get one generated from their text, exactly like before,
//   but never one that is already taken by a custom ID on the same page (Docusaurus doesn't check this).
// - `# Title {/* #my-id */}`: keeps the ID comment from leaking into the page title.
// - `{/* my-id */}` (missing the #): removed so it doesn't leak into the anchor and TOC, and logs a warning.
// - Legacy `{#my-id}`: still works (see `markdown.mdx1Compat.headingIds`), but logs a warning.
// - The same custom ID used twice on a page logs a warning.
//
// `parseFrontMatter` at the bottom does the same page title fix for page metadata.

import logger from '@docusaurus/logger';
import type { ParseFrontMatter } from '@docusaurus/types';
import { createSlugger, parseMarkdownHeadingId } from '@docusaurus/utils';
import { toString } from 'mdast-util-to-string';

// The parts of the Markdown AST (mdast) this plugin touches.
type MdNode = {
    type: string;
    value?: string;
    children?: MdNode[];
    position?: { start: { line: number } };
    data?: {
        hProperties?: { id?: string };
        estree?: { body: unknown[]; comments?: { value: string }[] };
    };
};

type MdFile = {
    path?: string;
    data: { compilerName?: string };
};

type Options = {
    // Keep in sync with `markdown.anchors.maintainCase` in docusaurus.config.ts.
    maintainCase?: boolean;
};

// The text of a `{/* comment */}` expression that holds a single comment and no code.
function getCommentText(node: MdNode | undefined): string | undefined {
    const program = node?.type === 'mdxTextExpression' ? node.data?.estree : undefined;
    if (program && program.body.length === 0 && program.comments?.length === 1) {
        return program.comments[0].value;
    }
    return undefined;
}

// Same rules as Docusaurus: the ID comment is the heading's last child and its first word starts with #.
function getCommentId(heading: MdNode): string | undefined {
    const firstPart = getCommentText(heading.children?.at(-1))?.trim().split(' ')[0];
    return firstPart?.startsWith('#') ? firstPart.slice(1) || undefined : undefined;
}

// Same text Docusaurus slugs into an auto-generated ID (raw HTML/JSX nodes are ignored).
function getHeadingText(heading: MdNode): string {
    const textNodes = (heading.children ?? []).filter(({ type }) => !['html', 'jsx'].includes(type));
    return toString(textNodes.length > 0 ? textNodes : heading);
}

// "My Heading {/* ... */}" leaves a trailing space on the text before the comment.
function trimTextBefore(heading: MdNode, index: number): void {
    const node = heading.children?.[index - 1];
    if (node?.type === 'text' && node.value) {
        node.value = node.value.trimEnd();
    }
}

export default function remarkHeadingIds({ maintainCase = false }: Options = {}) {
    return (root: MdNode, file: MdFile) => {
        const headings: MdNode[] = [];
        (function collect(node: MdNode) {
            if (node.type === 'heading') headings.push(node);
            node.children?.forEach(collect);
        })(root);

        // Both the client and server builds compile every page, so only warn from one of them.
        const warn = (heading: MdNode, message: string) => {
            if (file.data.compilerName === 'server') return;
            logger.warn(`${message}\n  at ${file.path}:${heading.position?.start.line ?? '?'}`);
        };

        const customIds = new Map<string, MdNode>();
        const fallbackHeadings: MdNode[] = [];

        for (const heading of headings) {
            const children = heading.children ?? [];
            const commentId = getCommentId(heading);
            const legacyId = parseMarkdownHeadingId(getHeadingText(heading), 'classic').id;
            const id = heading.data?.hProperties?.id ?? commentId ?? legacyId;

            if (!id) {
                const comment = getCommentText(children.at(-1));
                if (comment !== undefined) {
                    children.pop();
                    trimTextBefore(heading, children.length);
                    warn(heading, `Heading comment "{/*${comment}*/}" is not a heading ID, so it was ignored. Heading IDs must start with #, like "{/* #my-id */}".`);
                }
                fallbackHeadings.push(heading);
                continue;
            }

            if (commentId) {
                // Docusaurus reads the page title from the H1's text before it removes the ID comment.
                // Blank the comment's text so it can't leak; the ID is read from the parsed comment instead.
                children.at(-1)!.value = '';
                trimTextBefore(heading, children.length - 1);
            } else if (id === legacyId) {
                warn(heading, `Legacy heading ID syntax "{#${legacyId}}" is deprecated. Use "{/* #${legacyId} */}" instead.`);
            }

            const firstUse = customIds.get(id);
            if (firstUse) {
                warn(heading, `Heading ID "#${id}" is already used on line ${firstUse.position?.start.line ?? '?'}. Links to it will only reach the first one.`);
            } else {
                customIds.set(id, heading);
            }
        }

        // Without custom IDs, Docusaurus's own fallback IDs can't collide with anything.
        if (customIds.size === 0) return;

        // Reserve every custom ID first, so a fallback ID can never take one (it gets a -1, -2... suffix instead).
        const slugger = createSlugger();
        customIds.forEach((_, id) => slugger.slug(id, { maintainCase: true }));
        for (const heading of fallbackHeadings) {
            const id = slugger.slug(getHeadingText(heading), { maintainCase });
            if (id) {
                heading.data ??= {};
                heading.data.hProperties = { ...heading.data.hProperties, id };
            }
        }
    };
}

// `## My Heading {/* #my-id */}` → `## My Heading` (keeps the \r of CRLF line endings).
const HEADING_ID_COMMENT = /^(#{1,6}[ \t].*?)[ \t]*\{\/\*[ \t]*#\S+?[ \t]*\*\/\}[ \t]*(\r?)$/gm;

// Docusaurus reads page titles (without a front matter `title:`) and descriptions from the raw Markdown, and only
// strips the legacy `{#my-id}` there. Used as `markdown.parseFrontMatter`: strips `{/* #my-id */}` from heading
// lines in that copy of the content. The rendered page is compiled from the original file and is unaffected.
export const parseFrontMatter: ParseFrontMatter = async (params) => {
    const result = await params.defaultParseFrontMatter(params);
    return { ...result, content: result.content.replace(HEADING_ID_COMMENT, '$1$2') };
};
