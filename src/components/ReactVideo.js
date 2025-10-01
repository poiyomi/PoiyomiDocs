import React, { Suspense } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ReactPlayer from 'react-player';

export default function ReactVideo({
    src,
    autoplay = true,
    loop = true,
    controls = true,
    muted = true,
    playsinline,
    playsInline,
    style,
    children,
}) {
    const resolvedMuted = muted ?? autoplay;

    const shellStyle = {
        width: '100%',
        height: '100%',
        ...style,
    };

    return (
        <BrowserOnly fallback={<div style={shellStyle} />}>
            {() => (
                <Suspense fallback={<div style={shellStyle}>Loading video…</div>}>
                    <ReactPlayer
                        src={src}
                        controls={controls}
                        playing={autoplay}
                        loop={loop}
                        muted={resolvedMuted}
                        style={shellStyle}
                        playsinline={playsinline}
                        playsInline={playsInline}
                    >
                        {children}
                    </ReactPlayer>
                </Suspense>
            )}
        </BrowserOnly>
    );
}
