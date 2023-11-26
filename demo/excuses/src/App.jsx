import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>The Excuse Machine</h1>
      <div className="excuse-container">
        <button onClick={() => console.log('This will generate an excuse')}>
          Generate Excuse
        </button>
        <p className="excuse">
          Excuses will go here
        </p>
      </div>
    </>
  )
}

export default App
