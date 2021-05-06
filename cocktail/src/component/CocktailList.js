import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

function CocktailList() {
  const { cocktail, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (cocktail.length === 0) {
    return (
      <section className='section'>
        <h3>No Cocktails Matched Your Search Criteria</h3>
      </section>
    )
  }

  return (
    <section className='section'>
      <h3>Cocktails</h3>
      <div className='cocktail-center'>
        {cocktail.map((item, index) => {
          return <Cocktail key={index} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
