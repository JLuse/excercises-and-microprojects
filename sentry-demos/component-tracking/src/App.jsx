import './App.css'
import TrackedComponent from './components/TrackedComponent'
import OtherTrackedComp from './components/OtherTrackedComp';
import { useState } from 'react';
import * as Sentry from '@sentry/react';

// const YOUR_THRESHOLD = 1; // Set your threshold value in seconds

function App() {
// basic working
  // return (
  //   <>
  //     {/* <button onClick={() => methodDoesNotExist()}>Break the world</button>;   */}
  //     <p className="read-the-docs">
  //       Testing Component tracking
  //     </p>
  //     <TrackedComponent />
  //   </>
  // )
// }

  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    // Start a custom span to track the component render
    const span = Sentry.startSpan({ name: 'Button Click Render' }, () => {
      return (
          <div>
            <button onClick={handleButtonClick}>Render Tracked Component</button>
            {showComponent && <TrackedComponent />}
          </div>
        );
    });
    console.log(span)

    // Show the component
    setShowComponent(true);


    // This was an attempt to simulate slower render times
    // Finish the span after rendering the component
    // span.end();
    // const renderTime = span.endTimestamp - span.startTimestamp;
  //   console.log('Button click render time:', renderTime);

  //   if (renderTime > YOUR_THRESHOLD) {
  //     Sentry.captureMessage(`Button click render time exceeded threshold: ${renderTime}s`, 'warning');
  //   }
  };

  return (
    <div>
      <OtherTrackedComp/>
      <button onClick={handleButtonClick}>Render Tracked Component</button>
      {showComponent && <TrackedComponent />}
    </div>
  );
}

export default App;
