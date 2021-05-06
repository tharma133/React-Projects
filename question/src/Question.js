import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

function Question({ title, info }) {
  const [show, setShow] = useState(false)

  return (
    <article>
      <div className='question'>
        <div className='question-header'>
          <p>{title}</p>
          {show ? (
            <button className='btn' onClick={() => setShow(false)}>
              <AiOutlineMinus />
            </button>
          ) : (
            <button className='btn' onClick={() => setShow(true)}>
              <AiOutlinePlus />
            </button>
          )}
        </div>
        {show && <hr />}
        {show && <p className='info'>{info}</p>}
      </div>
    </article>
  )
}

export default Question
