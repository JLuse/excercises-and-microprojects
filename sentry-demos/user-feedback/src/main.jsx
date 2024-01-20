import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d1d9c3fc983fdb52498e64f990e23519@o565143.ingest.sentry.io/4506590278844416",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
    new Sentry.Feedback({
      autoInject: true,
      showBranding: false,
      submitButtonLabel: 'Submit',
      colorScheme: 'light',
      themeLight: {
      submitBorder: '#FF7C72',
      submitBackground: '#FF7C72',
      submitBackgroundHover: '#FC5F53',
      submitOutlineFocus: '#FB5F53',
      },
      useSentryUser: {
      email: 'email',
      name: 'name',
      },
      }), 

  ],
  debug: true,
  beforeSend(event) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ 
        eventId: event.event_id,
        '--z-index': 1300,
        zIndex: 1300,
        themeLight: {
        zIndex: 1300,
        '--z-index': 1300,
        }, 
      });
      
    }
    return event;
  },
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
