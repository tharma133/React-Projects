import React from 'react'
import phone from './images/phone.svg'
function Home() {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn start-btn'>Start now</button>
        </div>
        <div className='hero-image'>
          <img src={phone} alt='logo' className='img' />
        </div>
      </div>
    </div>
  )
}

export default Home
