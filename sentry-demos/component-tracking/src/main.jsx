import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d34d18ec86a6af814df967a8753c6a62@o982579.ingest.us.sentry.io/4507739337129984",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  debug: true,
  beforeSendSpan(span) {
    if (span.description === '<CustomAppName>') {
      console.log('BEFORE SPAN -- ', span)
      Sentry.metrics.set("customComponentMetric", "TEST from beforeSendSpan");
    }
    return span;
  },
});

// const container = document.getElementById(“app”);
// const root = createRoot(container);
// root.render(<App />);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
