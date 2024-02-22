import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://ed75f14a290220a518c62b0e331ead39@o565143.ingest.sentry.io/4506140661972992",
  debug: true,
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.BrowserProfilingIntegration(),
    new Sentry.Replay(),
  ],
  // debug: true,
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  profilesSampleRate: 1.0,
  beforeSend(event) {
    console.log(event)
  },
});

// const container = document.getElementById(“app”);
// const root = createRoot(container);
// root.render(<App />);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
