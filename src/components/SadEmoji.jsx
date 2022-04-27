import React from 'react'
export default function SadEmoji({ rating, feedBack }) {
  return (
    <span className='emoji'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={rating === 'sad' ? 'emojiIcon activeEmoji' : 'emojiIcon'}
        onClick={() => feedBack('sad')}
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <g fill="none"><path d="M12 1.998c5.524 0 10.002 4.478 10.002 10.002C22.002 17.523 17.523 22 12 22C6.476 22.001 1.998 17.523 1.998 12C1.998 6.476 6.476 1.998 12 1.998zm0 11.5A5.985 5.985 0 0 0 7.712 15.3a.75.75 0 1 0 1.071 1.05A4.485 4.485 0 0 1 12 14.996c1.225 0 2.37.49 3.211 1.347a.75.75 0 1 0 1.07-1.052A5.985 5.985 0 0 0 12 13.498zM9 8.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 8.75zm6 0a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499z" fill="currentColor"></path></g>
      </svg>
      <span className={rating === 'sad' ? 'emojiTitle emojiTitleActive' : 'emojiTitle'}>Not Good</span>
    </span>
  )
}