import React from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Video({ src, w, h, alt, youtube }) {
    if (youtube) {
        if (ExecutionEnvironment.canUseDOM) {
            return <lite-youtube class="youtube-vdo" videoid={src} />
        }
        return <></>
    }

    return (
        <video preload="auto" /*  width={w} height={h} */ width="100%" autoPlay controls muted>
            <source src={`/video/${src}.mp4`} type="video/mp4" />
        </video>
    )
}