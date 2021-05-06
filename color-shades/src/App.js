import { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [list, setList] = useState(new Values('#f15025').all(10))
  const [error, setError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let values = new Values(color).all(10)
      setList(values)
    } catch (err) {
      setError(true)
    }
  }
  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
