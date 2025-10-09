import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import {useLocation} from "@docusaurus/router";

function useQueryParam(name: string) {
    const {search} = useLocation();
    return React.useMemo(() => {
        const params = new URLSearchParams(search);
        return params.get(name);
    }, [search, name]);
}

function Inner({
    name = "ref",
    equals,
    inList,
    caseInsensitive = true,
    children,
}: {
    name?: string;
    equals?: string;
    inList?: string[];
    caseInsensitive?: boolean;
    children: React.ReactNode;
}) {
    const valueRaw = useQueryParam(name);
    if (valueRaw == null) return null;

    const norm = (s: string) => (caseInsensitive ? s.toLowerCase() : s);
    const value = norm(valueRaw);

    if (equals !== undefined) {
        return value === norm(equals) ? <>{children}</> : null;
    }
    if (inList && inList.length > 0) {
        const set = new Set(inList.map(norm));
        return set.has(value) ? <>{children}</> : null;
    }
    return <>{children}</>
}

/**
 * CLient-only wrapper to avoid SSR mismatches.
*/
export default function ShowWhenRef(props: Parameters<typeof Inner>[0]) {
    return (
        <BrowserOnly fallback={null}>
            {() => <Inner {...props} />}
        </BrowserOnly>
    );
}