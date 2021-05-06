import React from 'react'
import { Link } from 'react-router-dom'

function Cocktail({ id, name, image, info, glass }) {
  return (
    <article>
      <div className='img-container'>
        <img src={image} alt={name} className='cocktail-image' />
      </div>
      <div className='details'>
        <h1>{name}</h1>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>
          <button className='btn'>Details</button>
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
