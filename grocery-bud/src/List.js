import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

function List({ items, removeItem, editItem }) {
  return (
    <>
      {items.map((item, index) => {
        return (
          <article className='grocery-items' key={index}>
            <p className='title'>{item.title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='btn edit-btn'
                onClick={() => editItem(item.id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='btn delete-btn'
                onClick={() => removeItem(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
