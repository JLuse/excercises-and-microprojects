import './App.css'
import * as Sentry from "@sentry/react";


function App() {
  const throwError = () => {
    let r = (Math.random() + 1).toString(36).substring(7);
    throw new Error('Random Error: ' + r);
  }

  const handleError = () => {
    try {
        funct1()
      } catch (err) {
        Sentry.captureException(err);
    }
  }


  return (
    <>
      <h1>SENTRY LOVES FEEDBACK!</h1>
      <button onClick={throwError}>Throw Error</button>
      {/* <button onClick={unhandled()}>Unhandled</button> */}
      <button onClick={handleError}>Handled</button>
    </>
  )
}

export default App
