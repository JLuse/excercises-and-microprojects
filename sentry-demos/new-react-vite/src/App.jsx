import { useState } from 'react'
import * as Sentry from "@sentry/react";

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const throwError = () => {
      Sentry.setUser({ email: "john.hoe@example.com" });
      // Throw an error when the button is clicked
      throw new Error('This is a simulated ERRORZZZ.');
    };

    const throwError2 = () => {
      Sentry.setUser({ email: "jay@example.com" });
      // Throw an error when the button is clicked
      throw new Error('New error.');
    };


  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => throwError()}>Break the world 1</button>
        <button onClick={() => throwError2()}>Break the world 2</button>
        </div>
    </>
  )
}

export default App
