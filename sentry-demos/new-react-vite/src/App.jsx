import { useState } from 'react'
import * as Sentry from "@sentry/react";

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Sentry.setUser({ email: "global.test@example" });

  console.log('current user outside', Sentry.getCurrentScope().getUser())
  
  const throwError = () => {
      Sentry.setUser({ email: "global.test@example" });
      // Sentry.setUser({ email: "john.hoe@example.com" });
      // Throw an error when the button is clicked
      throw new Error('This is a simulated ERRORZZZ.');
    };

    const throwError2 = () => {
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
        <button onClick={() => noFunct()}>Break the world 3</button>
        </div>
    </>
  )
}

export default App
