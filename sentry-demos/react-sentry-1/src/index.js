import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App';

Sentry.init({
  dsn: "https://3aa7d589de824a9d9a867d37aff73a87@o565143.ingest.sentry.io/4504523602722816",
  integrations: [new BrowserTracing()],
  enviroment: 'prod',
  // release: 'react-sentry@0.0.6',
  tracesSampleRate: 1.0,
  // beforeSendTransaction(event) {
  //   // event.tags.push({"tags":{ key: 'KEY', quantity: "quantity" }})
  //   event.tags['SDKRangers'] = 'Custom value for a tag'
  //   console.log(event)
  // }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);