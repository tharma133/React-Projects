import React, { useEffect, useState } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')))
  } else {
    return []
  }
}

function App() {
  const [list, setList] = useState(getLocalStorage())
  const [name, setName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'Please enter value')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      showAlert(true, 'success', 'Item edited')
      setEditID(null)
      setIsEditing(false)
      setName('')
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'Items added to the list')
      const newItems = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItems])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
    showAlert(true, 'danger', 'Item removed')
  }

  const editItem = (id) => {
    const el = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(el.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
    const timeout = setTimeout(() => {
      showAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])

  return (
    <section className='section-center'>
      <div className='grocery'>
        <Alert {...alert} list={list} />
        <h2>Grocery Bud</h2>
        <form className='form'>
          <input
            type='text'
            className='text'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='btn' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button
            className='btn clear-btn'
            onClick={() => {
              setList([])
              showAlert(true, 'danger', 'Items Cleared')
            }}
          >
            Clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
