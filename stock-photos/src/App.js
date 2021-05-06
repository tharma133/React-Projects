import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

const mainUrl = `https://api.unsplash.com/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')

  const fetchImage = async () => {
    setLoading(true)
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhoto) => {
        if (query && page === 1) {
          return data.results
        } else if (query) {
          return [...oldPhoto, ...data.results]
        } else {
          return [...oldPhoto, ...data]
        }
      })
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1
        })
      }
    })
    return () => window.removeEventListener('scroll', event)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setPage(1)
  }

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='search'
            value={query}
            className='form-input'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photo-center'>
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  )
}

export default App
