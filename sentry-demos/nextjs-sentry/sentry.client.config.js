// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://875b162b0be648eaa85db613009c1a1a@o565143.ingest.sentry.io/4504087486922752',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  
  environment: 'dev',
  autoSessionTracking: true,
  attachStacktrace: true,
  debug: true,
  release: 'somerelease@12345',

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    new Sentry.Replay({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],


});
