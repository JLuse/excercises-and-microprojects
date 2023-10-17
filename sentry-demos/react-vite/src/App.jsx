import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => methodDoesNotExist()}>Break the world</button>
        <button onClick={() => {throw new Error('This is a test')}}>Throw error</button>
      </div>
    </>
  )
}

export default App
