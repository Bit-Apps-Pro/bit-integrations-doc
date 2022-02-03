import React, { useEffect, useState } from 'react'
import { default as IImg } from '@theme/IdealImage'

export default function Image({ src, w, h, alt }) {
  const [modal, setmodal] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        setmodal(false)
      }
    })
  }, [])

  if (process.env.NODE_ENV === 'developme nt') {
    return <div >
      <div className={`img-backdrop ${!modal && 'd-non'}`} onClick={() => setmodal(false)} onKeyPress={() => setmodal(false)} tabIndex="0" role="button" aria-label="image preview close" />
      <img className={`doc-img ${modal ? 'zoom-in' : ''}`} loading="lazy" src={`/img/${src}.png`} width={w} height={h} alt={alt} onClick={() => setmodal(true)} onKeyPress={() => setmodal(true)} />
    </div>
  } else {
    return <>
      <div className={`img-backdrop ${!modal && 'd-non'}`} onClick={() => setmodal(false)} onKeyPress={() => setmodal(false)} tabIndex="0" role="button" aria-label="image preview close" />
      <div role="button" onClick={(() => setmodal(true))} onKeyPress={() => setmodal(true)} tabIndex="0"><IImg className={`doc-img ${modal ? 'zoom-in' : ''}`} size={w} img={require(`../../static/img/${src}.png`)} /></div>
    </>
  }
}
