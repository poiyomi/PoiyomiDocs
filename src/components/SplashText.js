import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Webpack require.context: makes every JSON file under src/data/ available to load
// by name at runtime, while keeping the imports static-analyzable for the bundler.
const dataContext = require.context('@site/src/data', false, /\.json$/);

const SplashText = ({ src = 'splashes', fallback = ' ', className, style }) => {
    let items = [];
    try {
        const data = dataContext(`./${src}.json`);
        const raw = Array.isArray(data) ? data : (data.default ?? []);
        items = Array.isArray(raw) ? raw : [];
    } catch (e) {
        items = [];
    }

    // Render nothing meaningful on the server (just an invisible non-breaking space
    // to hold the line height). On the client, pick a random entry on the very first
    // render — no post-mount swap, so no "wrong text" flash.
    return (
        <BrowserOnly fallback={<span className={className} style={style}>{fallback}</span>}>
            {() => {
                const text = items.length > 0 ? items[Math.floor(Math.random() * items.length)] : fallback;
                return <span className={className} style={style}>{text}</span>;
            }}
        </BrowserOnly>
    );
};

export default SplashText;