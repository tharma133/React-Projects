import data from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useEffect, useState } from 'react'

function App() {
  const [index, setIndex] = useState(0)

  const prevSlider = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex - 1
      if (newIndex < 0) {
        newIndex = data.length - 1
      }
      return newIndex
    })
  }

  const nextSlider = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex + 1
      if (newIndex > data.length - 1) {
        newIndex = 0
      }
      return newIndex
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > data.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <main>
      <div className='header'>
        <h1 className='title'>
          <span>/</span> Reviews
        </h1>
      </div>
      <div className='section-center'>
        {data.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === data.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <p className='name'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={prevSlider}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlider}>
          <FiChevronRight />
        </button>
      </div>
    </main>
  )
}

export default App
