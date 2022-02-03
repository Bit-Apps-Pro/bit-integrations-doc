import React from 'react'

export default function Log({ date, children }) {
  return (
    <div className="log flx timeline">
      <div className="date">{date}</div>
      <div className="line" />
      <div>
        {children}
      </div>
    </div>
  )
}
