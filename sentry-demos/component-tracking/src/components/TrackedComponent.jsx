import { useEffect, useState } from 'react';
import * as Sentry from '@sentry/react';

const YOUR_THRESHOLD = 1; // Set your threshold value in seconds

function TrackedComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Start a new span for the render
    const span = Sentry.startSpan({ name: 'TrackedComponent Render'}, () => {
      return console.log('Testing Span')
    });

    return () => {
      // Finish the span and measure the render time
      span.finish();
      const renderTime = span.endTimestamp - span.startTimestamp;
      console.log('Render time:', renderTime);

      // Report to Sentry if render time exceeds the threshold
      if (renderTime > YOUR_THRESHOLD) {
        Sentry.captureMessage(`Component render time exceeded threshold: ${renderTime}s`, 'warning');
      }

      // Optional: Update count to track re-renders
      setCount(prevCount => prevCount + 1);
    };
  });

  return (
    <div>
      <p>Custom component</p>
      <p>Render count: {count}</p>
    </div>
  );
}

export default TrackedComponent;
