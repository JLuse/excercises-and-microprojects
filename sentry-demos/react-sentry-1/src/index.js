import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App';

Sentry.init({
  dsn: "https://4256b8867cf246209f998caa1596e807@o565143.ingest.sentry.io/4504765299752960",
  integrations: [new BrowserTracing()],
  enviroment: 'prod',
  // release: 'react-sentry@0.0.6',
  tracesSampleRate: 1.0,
  // beforeSendTransaction(event) {
  //   // event.tags.push({"tags":{ key: 'KEY', quantity: "quantity" }})
  //   event.tags['SDKRangers'] = 'Custom value for a tag'
  //   console.log(event)
  // }
  replaysSessionSampleRate: 0.1,

  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    new Sentry.Replay({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);