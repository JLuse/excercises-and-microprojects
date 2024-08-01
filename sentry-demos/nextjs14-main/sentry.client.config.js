// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
console.log(process.env.SENTRY_ENV)
Sentry.init({
  dsn: "https://29bef7f76c9ef691ca30828797bc5772@o982579.ingest.us.sentry.io/4507471779659776",
  integrations: [
    // Add browser profiling integration to the list of integrations
    new Sentry.browserProfilingIntegration(),
  ],

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
      environment: 'Test'
    }),
  ],
  profilesSampleRate: 1.0,
});
