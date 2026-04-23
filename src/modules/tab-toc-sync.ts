// Activates the correct Tab when a TOC/hash heading link points to a heading inside an inactive TabItem.

function findTabPanelAncestor(el: Element | null): HTMLElement | null {
    let cur: Element | null = el?.parentElement ?? null;
    while (cur && cur !== document.body) {
        if (cur.getAttribute('role') === 'tabpanel') return cur as HTMLElement;
        cur = cur.parentElement;
    }
    return null;
}

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

function syncTabsForHash(hash: string): void {
    if (!hash || hash === '#') return;
    const id = decodeURIComponent(hash.slice(1));
    const target = document.getElementById(id);
    if (!target) return;

    // Walk up, activating every ancestor tabpanel (handles nested tabs).
    let panel = findTabPanelAncestor(target);
    let activatedAny = false;
    while (panel) {
        if (activateTabFor(panel)) activatedAny = true;
        panel = findTabPanelAncestor(panel);
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
    window.addEventListener('load', () => syncTabsForHash(window.location.hash));
}

export {};