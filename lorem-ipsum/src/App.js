import { useState } from 'react'
import text from './data'

function App() {
  const [data, setData] = useState([])
  const [value, setValue] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(value)
    if (value <= 0) {
      amount = 1
    }
    if (value > text.length - 1) {
      amount = text.length - 1
    }
    setData(text.slice(0, amount))
  }

  return (
    <main>
      <h2 className='title'>tired of boring lorem ipsum?</h2>
      <form className='generator' onSubmit={handleSubmit}>
        <label htmlFor='text'>Paragraphs:</label>
        <input
          type='number'
          name='text'
          value={value}
          className='input'
          onChange={(e) => setValue(e.target.value)}
        />
        <button className='btn'>Generate</button>
      </form>
      <div className='content'>
        {data.map((text, index) => {
          return (
            <p key={index} className='text'>
              {text}
            </p>
          )
        })}
      </div>
    </main>
  )
}

export default App
