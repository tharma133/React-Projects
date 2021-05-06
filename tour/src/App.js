import { useEffect, useState } from 'react'
import Tour from './Tour'
import Loading from './Loading'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const removeTour = (id) => {
    const newTours = data.filter((tour) => tour.id !== id)
    setData(newTours)
  }
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setLoading(false)
      setData(data)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(() => fetchData(), [])

  if (loading) {
    return <Loading />
  }

  if (data.length === 0) {
    return (
      <main>
        <section className='container'>
          <div className='title'>
            <h1 style={{ textTransform: 'capitalize' }}>No Tours left!</h1>
            <button className='refresh-btn' onClick={() => fetchData()}>
              Refresh
            </button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h1>Our Tours</h1>
          <div className='hr'></div>
        </div>
        <div className='tours'>
          {data.map((tour, index) => {
            return <Tour key={index} tour={tour} removeTour={removeTour} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App
