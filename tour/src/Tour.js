import React, { useState } from 'react'

function Tour({ tour, removeTour }) {
  const [show, setShow] = useState(false)

  return (
    <div className='tour'>
      <img src={tour.image} alt={tour.name} />
      <div className='tour-details'>
        <div className='details'>
          <p className='name'>{tour.name}</p>
          <p className='price'>${tour.price}</p>
        </div>
        <p className='info'>
          {show ? `${tour.info}` : `${tour.info.slice(0, 150)}...`}
          {show ? (
            <button className='btn' onClick={() => setShow(false)}>
              Show less
            </button>
          ) : (
            <button className='btn' onClick={() => setShow(true)}>
              Read more
            </button>
          )}
        </p>
        <button className='cancel' onClick={() => removeTour(tour.id)}>
          Not Interested
        </button>
      </div>
    </div>
  )
}

export default Tour
