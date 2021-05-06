import { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setJobs(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <main className='loading'>
        <h1>Loading....</h1>
      </main>
    )
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <main>
      <div className='header'>
        <h1>Experience</h1>
        <div className='underline'></div>
      </div>
      <div className='container'>
        <div className='btns'>
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={`btn ${value === index && 'active'}`}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className='details'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='duties'>
                <FaAngleDoubleRight className='icon' />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </main>
  )
}

export default App
