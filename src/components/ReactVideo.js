import React, { Suspense } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ReactPlayer from 'react-player';

export default function ReactVideo({
    src,
    autoplay = true,
    loop = true,
    controls = true,
    muted,
    forceInline = true,
    style,
    children,
    ...rest
}) {
    // Honors the explicit `muted` prop; otherwise mute when autoplaying (mobile policy friendly)
    const resolvedMuted = muted ?? autoplay;

    // Ensure responsive box using CSS.
    const shellStyle = {
        width: '100%',
        height: '100%',
        ...style,
    };

    // If the caller provided a `config`, merge our inline attributes in without clobbering theirs.
    const { config: userConfig, ...restProps } = rest;

    const mergedConfig = {
        ...(userConfig || {}),
        file: {
            ...((userConfig && userConfig.file) || {}),
            attributes: {
                ...(((userConfig && userConfig.file) && userConfig.file.attributes) || {}),
                ...(forceInline ? { playsInline: true, 'webkit-playsinline': true } : {}),
            },
        },
    };

    return (
        <BrowserOnly fallback={<div style={shellStyle} />}>
            {() => (
                <Suspense fallback={<div style={shellStyle}>Loading Video...</div>}>
                    <ReactPlayer
                        src={src}
                        controls={controls}
                        playing={autoplay}
                        loop={loop}
                        muted={resolvedMuted}
                        style={shellStyle}
                        // Pass both React DOM and lowercase variants.
                        // react-player forwards to the underlying <video> when applicable.
                        {...(forceInline ? { playsInline: true, playsinline: true } : {})}
                        config={mergedConfig}
                        {...restProps}
                    >
                        {children}
                    </ReactPlayer>
                </Suspense>
            )}
        </BrowserOnly>
    );
}
