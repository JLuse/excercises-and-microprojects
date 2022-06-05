import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

if (true) {
  Sentry.init({
    dsn: "https://6171e0eae79746fa9c875d94ad38411e@o565143.ingest.sentry.io/6298426",
    integrations: [new BrowserTracing()],
    environment: "dev",

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));