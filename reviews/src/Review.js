import React, { useState } from 'react'
import data from './data'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { FaQuoteRight } from 'react-icons/fa'

function Review() {
  const [index, setIndex] = useState(0)
  const { name, image, job, text } = data[index]

  const checkNumber = (number) => {
    if (number < 0) {
      return data.length - 1
    }
    if (number > data.length - 1) {
      return 0
    }
    return number
  }

  const nextIndex = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevIndex = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const surpriseMe = () => {
    let randomNumber = Math.floor(Math.random() * data.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }
  return (
    <div className='content'>
      <div className='image'>
        <img src={image} alt={name} className='img' />
        <span className='quotes'>
          <FaQuoteRight />
        </span>
      </div>
      <div className='details'>
        <p className='name'>{name}</p>
        <p className='job'>{job}</p>
        <p className='text'>{text}</p>
      </div>
      <div className='icons'>
        <button className='icon' onClick={() => prevIndex()}>
          <MdKeyboardArrowLeft />
        </button>
        <button className='icon' onClick={() => nextIndex()}>
          <MdKeyboardArrowRight />
        </button>
      </div>
      <button className='btn' onClick={() => surpriseMe()}>
        Surprise Me
      </button>
    </div>
  )
}

export default Review
