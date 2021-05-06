import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className='section error-section'>
      <h3>Oops! It's a dead end</h3>
      <Link to='/'>
        <button className='btn error'>Back home</button>{' '}
      </Link>
    </section>
  )
}

export default Error
