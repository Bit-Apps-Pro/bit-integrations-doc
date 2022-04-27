import React, { useEffect, useState } from 'react'
import SadEmoji from './SadEmoji'
import MehEmoji from './MehEmoji'
import GoodEmoji from './GoodEmoji'
import GreatEmoji from './GreatEmoji'
import UnsatisfiedEmoji from './UnsatisfiedEmoji'
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function FeedBack() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <FeedbackClient />}
    </BrowserOnly>
  )
}
function FeedbackClient() {
  const FEEDBACK_URL = 'https://wp-api.bitapps.pro/feedback'
  const PRODUCT = 'bit-integration-docs'
  const [feedBackOpen, setFeedBackOpen] = useState(false)
  const [form, setForm] = useState({})
  const [error, setError] = useState({})
  const [rating, setRating] = useState('')
  const [successMsg, setSuccessMsg] = useState(false)
  const [feedbackDetails, setFeedbackDetails] = useState({})
  const path = window.location.pathname
  const currentPageName = path.substring(1)
  const [currentUrl, setCurrentUrl] = useState(currentPageName)

  const feedBack = (emoji) => {
    setFeedBackOpen(true)
    setRating(emoji)
    const feedbakData = {
      product: PRODUCT,
      userId: feedbackDetails.userId,
      rating: emoji,
      pageSlug: currentUrl
    }
    setForm({ ...feedbakData })

    fetch(FEEDBACK_URL, {
      method: 'post',
      body: JSON.stringify(feedbakData),
      headers: { "Content-type": "application/json" },
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          const getFeedback = getItem('feedback')
          localStorage.removeItem("feedback")
          const feedBack = { ...getFeedback, [currentUrl]: emoji }
          setItem('feedback', JSON.stringify(feedBack))
        }
      })
  }

  const setItem = (key, value) => {
    localStorage.setItem(key, value)
  }

  const getItem = (key) => {
    const getFeedbackObject = localStorage.getItem(key)
    return JSON.parse(getFeedbackObject)
  }

  useEffect(() => {
    if (!currentUrl) { setCurrentUrl('welcome') }

    const feedBack = getItem('feedback')
    if (feedBack) {
      setFeedbackDetails(feedBack)
      const getCurrentPageName = !currentPageName ? 'welcome' : currentPageName
      setRating(feedBack[getCurrentPageName])
    } else {
      const userId = new Date().getTime().toString()
      setItem('feedback', JSON.stringify({ userId: userId }))
      const feedBack = getItem('feedback')
      setFeedbackDetails(feedBack)
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!Object.keys(error).length) {
      form.product = 'bitform'
      form.userId = feedbackDetails.userId
      form.pageSlug = currentUrl
      fetch(FEEDBACK_URL, {
        method: 'post',
        body: JSON.stringify(form),
        headers: { "Content-type": "application/json" },
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            setSuccessMsg(true)
          }
        })
    }
  }

  const validationForm = (name, value) => {
    switch (name) {
      case 'name':
        const namePattern = /^[A-Za-z ]+$/
        if (value && !value.match(namePattern)) setError(prvError => {
          prvError[name] = 'Name must be alphabet'
          return prvError
        })
        else setError(prvError => {
          delete prvError?.name
          return prvError
        })
        break
      case 'email':
        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (value && !value.match(emailPattern)) setError(prvError => {
          prvError[name] = 'Invalid email'
          return prvError
        })
        else setError(prvError => {
          delete prvError?.email
          return prvError
        })
        break
      case 'message':
        if (value && value.length > 500) setError(prvError => {
          prvError[name] = 'Message must be less then 500 Charecter.'
          return prvError
        })
        else setError(prvError => {
          delete prvError?.message
          return prvError
        })
        break
      default:
        break
    }
  }

  const handleForm = ({ target: { name, value } }) => {
    validationForm(name, value)
    setForm(prvForm => ({ ...prvForm, [name]: value }))
  }

  return (
    <div className='feedBackOption'>
      {!successMsg && <><h2>Was this page helpfull?</h2>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <UnsatisfiedEmoji rating={rating} feedBack={feedBack} />
          <SadEmoji rating={rating} feedBack={feedBack} />
          <MehEmoji rating={rating} feedBack={feedBack} />
          <GoodEmoji rating={rating} feedBack={feedBack} />
          <GreatEmoji rating={rating} feedBack={feedBack} />
        </ div></>}
      {successMsg && <div><h3 className='successMsg'>Thanks for your feedback!</h3></div>}
      {!successMsg && <div className={feedBackOpen ? 'feedBack feedBackFedeIn' : 'feedBack'}>
        <form onSubmit={handleSubmit}>
          <div className='inputRow'>
            <div className='formControl'>
              <input aria-label='Name' type="text" onChange={handleForm} name="name" placeholder='Enter your name (optional)' className='formControlInput' />
              <span className='error'>{error.name && error.name}</span>
            </div>
            <div className='formControl'>
              <input aria-label='Email' type="email" onChange={handleForm} name="email" placeholder='Enter your email (optional)' className='formControlInput' />
              <span className='error'>{error.email && error.email}</span>
            </div>
          </div>
          <div className='inputRow'>
            <div className='formControl'>
              <textarea aria-label='Your Feedback' name="message" onChange={handleForm} placeholder='Your feedback' rows="4" className='formControlInput formControlTextArea'></textarea>
              <span className='error'>{error.message && error.message}</span>
            </div>
          </div>
          <button className='download-btn submitBtn' type='submit'>Submit</button>
        </form>
      </div>}
    </div>
  )
}
