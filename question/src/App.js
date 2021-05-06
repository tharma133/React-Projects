import Question from './Question'
import data from './data'
function App() {
  return (
    <main>
      <article className='container'>
        <h1 className='title'>Questions and answers about login</h1>
        <div className='questions'>
          {data.map((question, index) => {
            return <Question key={index} {...question} />
          })}
        </div>
      </article>
    </main>
  )
}

export default App
