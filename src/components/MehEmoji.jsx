import React from 'react'
export default function SadEmoji({ rating, feedBack }) {
  return (
    <span className='emoji'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => feedBack('neutral')}
        className={rating === 'neutral' ? 'emojiIcon activeEmoji' : 'emojiIcon'}
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <g fill="none"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm-1.75 8a1.25 1.25 0 1 1-2.499 0a1.25 1.25 0 0 1 2.499 0zm6 0a1.25 1.25 0 1 1-2.499 0a1.25 1.25 0 0 1 2.499 0zM7.5 15.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75z" fill="currentColor"></path>
        </g>
      </svg>
      <span className={rating === 'neutral' ? 'emojiTitle emojiTitleActive' : 'emojiTitle'}>Neutral</span>
    </span>
  )
}