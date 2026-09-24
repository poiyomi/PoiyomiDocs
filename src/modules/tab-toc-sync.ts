// Activates the correct Tab when a TOC/hash heading link points to a heading inside an inactive TabItem.
// Also opens a collapsed <details> box when the heading is its <summary> (e.g. FAQ questions) or inside it.

import type { ClientModule } from '@docusaurus/types';

function activateTabFor(panel: HTMLElement): boolean {
    // Panels are siblings inside a content wrapper (<div class="margin-top--md">)
    // that's a child of .tabs-container, alongside <ul role="tablist">.
    const content = panel.parentElement;
    const container = content?.parentElement;
    if (!content || !container) return false;

    const siblingPanels = Array.from(content.children).filter(
        (c): c is HTMLElement =>
            c instanceof HTMLElement && c.getAttribute('role') === 'tabpanel',
    );
    const index = siblingPanels.indexOf(panel);
    if (index < 0) return false;

    const tablist = container.querySelector<HTMLElement>(':scope > [role="tablist"]');
    if (!tablist) return false;

    const tabs = Array.from(tablist.children).filter(
        (c): c is HTMLElement =>
            c instanceof HTMLElement && c.getAttribute('role') === 'tab',
    );
    const tab = tabs[index];
    if (!tab) return false;

    if (tab.getAttribute('aria-selected') !== 'true') {
        tab.click();
        return true;
    }
    return false;
}

function openDetails(details: HTMLDetailsElement): boolean {
    // Docusaurus's <Details> keeps its state in data-collapsed; a plain <details> only has `open`.
    // Clicking the summary toggles it. React applies that before the next sync call can run, so it can't double-toggle.
    const collapsed = details.dataset.collapsed
        ? details.dataset.collapsed === 'true'
        : !details.open;
    const summary = details.querySelector<HTMLElement>(':scope > summary');
    if (!collapsed || !summary) return false;
    summary.click();
    return true;
}

function syncTabsForHash(hash: string): void {
    if (!hash || hash === '#') return;
    const id = decodeURIComponent(hash.slice(1));
    const target = document.getElementById(id);
    if (!target) return;

    // Walk up, activating every ancestor tabpanel and opening every ancestor <details> (handles nesting).
    let activatedAny = false;
    for (let el = target.parentElement; el && el !== document.body; el = el.parentElement) {
        if (el.getAttribute('role') === 'tabpanel' && activateTabFor(el)) activatedAny = true;
        if (el instanceof HTMLDetailsElement && openDetails(el)) activatedAny = true;
    }

    // After React re-renders the now-visible panel, scroll into view.
    if (activatedAny) {
        requestAnimationFrame(() =>
            requestAnimationFrame(() => {
                document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }),
        );
    }
}

if (typeof window !== 'undefined') {
    document.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as Element | null;
        const a = target?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
        if (!a) return;
        const url = new URL(a.href, window.location.href);
        if (url.pathname !== window.location.pathname || !url.hash) return;
        // Let Docusaurus update the hash first, then sync.
        setTimeout(() => syncTabsForHash(url.hash), 0);
    });
    window.addEventListener('hashchange', () => syncTabsForHash(window.location.hash));
}

// Page loads and navigation from another page. Runs once React has rendered the page (unlike window 'load').
// Hash changes on the same page are already handled by the listeners above.
export const onRouteDidUpdate: ClientModule['onRouteDidUpdate'] = ({ location, previousLocation }) => {
    if (location.pathname !== previousLocation?.pathname) syncTabsForHash(location.hash);
};