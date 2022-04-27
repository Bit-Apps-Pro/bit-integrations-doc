import React from 'react'
export default function GoodEmoji({ rating, feedBack }) {
  return (
    <span className='emoji'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => feedBack('good')} className={rating === 'good' ? 'emojiIcon activeEmoji' : 'emojiIcon'}
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <g fill="none"><path d="M12 1.998c5.524 0 10.002 4.478 10.002 10.002C22.002 17.523 17.524 22 12 22C6.476 22.001 1.998 17.523 1.998 12C1.998 6.476 6.476 1.998 12 1.998zM8.462 14.783a.75.75 0 0 0-1.178.928A5.991 5.991 0 0 0 12 18.001c1.86 0 3.581-.853 4.712-2.284a.75.75 0 0 0-1.177-.93A4.491 4.491 0 0 1 12 16.501c-1.398 0-2.69-.64-3.538-1.718zM9 8.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 8.75zm6 0a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499z" fill="currentColor"></path>
        </g>
      </svg>
      <span className={rating === 'good' ? 'emojiTitle emojiTitleActive' : 'emojiTitle'}>Good</span>
    </span>
  )
}