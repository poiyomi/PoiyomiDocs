// src/components/RefModal.tsx
import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from '@docusaurus/router';

type RefSpec = {
    label: string;
    message: string;
    cta: string;
    href: string;
};

const REF_MAP: Record<string, RefSpec> = {
    jinxxy: {
        label: 'Jinxxy',
        message: 'Find the downloads and installation instructions for Poiyomi Shaders on the "Download & Install" page, linked below.\n\nMake sure you follow the instructions on the page carefully to ensure there are no issues.',
        cta: 'Go to Download & Install',
        href: '/download?ref=jinxxy',
    },
    gumroad: {
        label: 'Gumroad',
        message: 'Find the downloads and installation instructions for Poiyomi Shaders on the "Download & Install" page, linked below.\n\nMake sure you follow the instructions on the page carefully to ensure there are no issues.',
        cta: 'Go to Download & Install',
        href: '/download?ref=gumroad',
    }
};

// Toggle: Developer use only.
// LEAVE THIS SET TO false ON PRODUCTION BUILDS!
const ALWAYS_SHOW_ON_REF = false;

function Modal({
    open,
    onClose,
    children,
}: { open: boolean; onClose: () => void; children: React.ReactNode }) {
    if (!open) return null;
    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Referral modal"
            style={{
                position: 'fixed',
                inset: 0,
                display: 'grid',
                placeItems: 'center',
                background: 'rgba(0,0,0,0.5)',
                zIndex: 9999,
            }}>
            <div
                style={{
                    maxWidth: 620,
                    width: '92%',
                    background: 'var(--ifm-background-surface-color)',
                    color: 'var(--ifm-font-color-base)',
                    borderRadius: 12,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                    padding: '1.25rem 1.25rem 1rem',
                }}>
                {children}
                <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
                    <button onClick={onClose} className="button button--secondary button--outline" type="button">
                        Dismiss
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function RefModal() {
    return (
        <BrowserOnly>
            {() => {
                const location = useLocation();

                // Capture Ref on first mount
                const [capturedRef] = React.useState<string | null>(() => {
                    const params = new URLSearchParams(location.search);
                    return params.get('ref');
                });

                // Spec never depends on Live URL
                const spec = capturedRef ? REF_MAP[capturedRef] : undefined;

                // Open logic
                const storageKey = spec ? `ref_seen_${capturedRef}` : '';
                const [open, setOpen] = React.useState<boolean>(() => {
                    if (!spec) return false;
                    return ALWAYS_SHOW_ON_REF ? true : sessionStorage.getItem(storageKey) !== '1';
                });

                // In dev mode, keep it open whenever a ref was captured (no URL dependency)
                React.useEffect(() => {
                    if (ALWAYS_SHOW_ON_REF && spec) setOpen(true);
                }, [spec]);

                // Mark as seen
                React.useEffect(() => {
                    if (!ALWAYS_SHOW_ON_REF && spec && open) {
                        sessionStorage.setItem(storageKey, '1');
                    }
                }, [spec, open, storageKey]);

                if (!spec) return null;

                return (
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <div style={{ display: 'grid', gap: 8 }}>
                            <strong style={{ fontSize: 20 }}>Welcome, {spec.label} Customers!</strong>
                            <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{spec.message}</p>
                            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 8 }}>
                                <a className="button button--primary button--lg" href={spec.href}>
                                    {spec.cta}
                                </a>
                            </div>
                        </div>
                    </Modal>
                );
            }}
        </BrowserOnly>
    );
}
