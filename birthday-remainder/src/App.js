import { useState } from 'react'
import { data } from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h2 className='length'>{people.length} birthdays today</h2>
        <List people={people} />
        <button className='btn' onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  )
}

export default App
