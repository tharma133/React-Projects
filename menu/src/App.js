import { useState } from 'react'
import Categories from './Categories'
import data from './data'
import Menu from './Menu'

const categories = ['all', ...new Set(data.map((items) => items.category))]
function App() {
  const [menu, setMenu] = useState(data)

  const filterMenu = (category) => {
    if (category === 'all') {
      setMenu(data)
      return
    }
    const newItems = data.filter((item) => item.category === category)
    setMenu(newItems)
  }
  return (
    <main>
      <section>
        <div className='header'>
          <h1 className='title'>Our Menu</h1>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu data={menu} />
      </section>
    </main>
  )
}

export default App
