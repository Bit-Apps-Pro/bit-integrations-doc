import React from 'react'
export default function GreatEmoji({ rating, feedBack }) {
  return (
    <span className='emoji'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => feedBack('great')}
        className={rating === 'great' ? 'emojiIcon activeEmoji' : 'emojiIcon'}
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm2.492 7.36a.75.75 0 1 1-1.484-.22c.162-1.09 1.123-1.89 2.242-1.89s2.08.8 2.242 1.89a.75.75 0 1 1-1.484.22c-.048-.323-.35-.61-.758-.61c-.408 0-.71.287-.758.61zM12 18c-3.142 0-5.237-2.363-5.5-5.25h11C17.237 15.637 15.142 18 12 18zM8.75 8.75c-.408 0-.71.287-.758.61a.75.75 0 1 1-1.484-.22C6.67 8.05 7.631 7.25 8.75 7.25s2.08.8 2.242 1.89a.75.75 0 1 1-1.484.22c-.048-.323-.35-.61-.758-.61z" fill="currentColor"></path>
        </g>
      </svg>
      <span className={rating === 'great' ? 'emojiTitle emojiTitleActive' : 'emojiTitle'}>Great</span>
    </span>
  )
}