import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://433ead2b9da6092eef88b5896d2468cc@o565143.ingest.sentry.io/4506305261469696",
  integrations: [
    new Sentry.Replay({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }), 
    new BrowserTracing({
    tracePropagationTargets: ["127.0.0.1", "localhost", "/api/food"],
    
  }),
],
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1,
  tracesSampleRate: 1.0,
	debug:true,
  
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
