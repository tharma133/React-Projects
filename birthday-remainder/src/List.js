import React from 'react'

function List({ people }) {
  return (
    <>
      {people.map((list) => {
        return (
          <div className='list'>
            <img src={list.image} alt={list.name} />
            <div className='details'>
              <h3 className='name'>{list.name}</h3>
              <p className='age'>{list.age} years</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default List
