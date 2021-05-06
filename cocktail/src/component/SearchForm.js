import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const refContainer = useRef(null)
  useEffect(() => {
    refContainer.current.focus()
  }, [])
  return (
    <form className='search'>
      <div className='search-form'>
        <label htmlFor='name'>Search Your Favorite Cocktail</label>
        <input
          type='text'
          name='name'
          id='name'
          ref={refContainer}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SearchForm
