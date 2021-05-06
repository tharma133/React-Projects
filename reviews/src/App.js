import Review from './Review'

function App() {
  return (
    <main>
      <section>
        <div className='title'>
          <h1>Our Reviews</h1>
          <div className='hr'></div>
        </div>
        <div className='container'>
          <Review />
        </div>
      </section>
    </main>
  )
}

export default App
