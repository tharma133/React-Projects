import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [cocktail, setCocktail] = useState([])
  const [searchTerm, setSearchTerm] = useState('a')

  useEffect(() => {
    const fetchDrink = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        const { drinks } = data
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = item

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            }
          })
          setCocktail(newCocktails)
        } else {
          setCocktail([])
        }
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
    fetchDrink()
  }, [searchTerm])

  return (
    <AppContext.Provider
      value={{ cocktail, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
