import React, { useState, useEffect } from 'react';

// Webpack require.context: makes every JSON file under src/data/ available to load
// by name at runtime, while keeping the imports static-analyzable for the bundler.
const dataContext = require.context('@site/src/data', false, /\.json$/);

const SplashText = ({ src = 'splashes', fallback, className, style }) => {
    let items = [];
    try {
        const data = dataContext(`./${src}.json`);
        const raw = Array.isArray(data) ? data : (data.default ?? []);
        items = Array.isArray(raw) ? raw : [];
    } catch (e) {
        items = [];
    }

    // Deterministic initial value so SSR and first client render agree (no hydration warning).
    const initial = fallback ?? items[0] ?? '';
    const [text, setText] = useState(initial);

    useEffect(() => {
        if (items.length > 1) {
            setText(items[Math.floor(Math.random() * items.length)]);
        }
    }, [src]);

    return <span className={className} style={style}>{text}</span>;
};

export default SplashText;