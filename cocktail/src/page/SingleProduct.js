import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../component/Loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
function SingleProduct() {
  const { id } = useParams()
  const [cocktail, setCocktail] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchSingleDrink = async () => {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
    fetchSingleDrink()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className='section.title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
    return (
      <section className='section cocktail-section'>
        <Link to='/'>
          <button className='btn'>back home</button>
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name} className='cocktail-single-image' />
          <div className='drinks-info'>
            <p>
              <span className='drink-data'>name :</span>
              {name}
            </p>
            <p>
              <span className='drink-data'>category :</span>
              {category}
            </p>
            <p>
              <span className='drink-data'>info :</span>
              {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span>
              {glass}
            </p>
            <p>
              <span className='drink-data'>instructions :</span>
              {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
export default SingleProduct
