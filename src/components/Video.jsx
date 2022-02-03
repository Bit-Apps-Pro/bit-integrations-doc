import React from 'react'

export default function Video({ src, w, h, alt, youtube }) {
    if (youtube) {
        if (typeof window !== 'undefined') {
            return <lite-youtube class="youtube-vdo" videoid={src} />
        } else {
            return <></>
        }
    }

    return (
        <video preload="auto"/*  width={w} height={h} */ width="100%" autoPlay controls muted>
            <source src={`/video/${src}.mp4`} type="video/mp4" />
        </video>
    )
}
