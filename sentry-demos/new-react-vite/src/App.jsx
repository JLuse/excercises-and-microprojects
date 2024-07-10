import { useState } from 'react'
import * as Sentry from "@sentry/react";

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Sentry.setUser({ email: "global.test@example" });
  const traceId = Math.floor(Math.random() * 1e12).toString().padStart(12, '0') +  Math.floor(Math.random() * 1e12).toString().padStart(12, '0');
  
  const throwError = () => {
      Sentry.setUser({ 
        id: 12121212, 
        extra: {
          orgid: 222, orgName: 'NAME'
        }
      });
      console.log('current user outside', Sentry.getCurrentScope().getUser())
      // Sentry.setUser({ email: "john.hoe@example.com" });
      // Throw an error when the button is clicked
      throw new Error('This is new new error error.');
    };

    const throwError2 = () => {
      // Throw an error when the button is clicked
      throw new Error('New error.');
    };

    const throwError3 = () => {
      Sentry.addBreadcrumb({
        category: 'request',
        message: 'Request started',
        data: { traceId: traceId },
        level: 'info',
      })
      // Throw an error when the button is clicked
      throw new Error('This is an error with a manual breadcrumbs');
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
        <button onClick={() => throwError3()}>Add breadcrumbs</button>
        </div>
    </>
  )
}

export default App
