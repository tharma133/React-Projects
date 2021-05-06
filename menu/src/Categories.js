import React from 'react'

function Categories({ categories, filterMenu }) {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            key={index}
            className='btn'
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
