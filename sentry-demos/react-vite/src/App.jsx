import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const throwError = () => {
    console.log("ERROR")
    // Throw an error when the button is clicked
    throw new Error('This is a simulated error.');
  };
  

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => methodDoesNotDOANYTHING()}>Break the world</button>
        <button onClick={() => {throwError()}}>Throw error</button>
        <button onClick={() => methodDoesNotDOANYTHING1()}>Break the world</button>
        <button onClick={() => methodDoesNotDOANYTHIN2()}>Break the world</button>
      </div>
    </>
  )
}

export default App
