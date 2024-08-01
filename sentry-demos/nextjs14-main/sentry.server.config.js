// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

console.log(process.env.SENTRY_ENV)
Sentry.init({
  dsn: "https://29bef7f76c9ef691ca30828797bc5772@o982579.ingest.us.sentry.io/4507471779659776",
  integrations: [
    // Add profiling integration to list of integrations
    nodeProfilingIntegration(),
  ],

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,
  profilesSampleRate: 1.0,

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
  environment: 'Test',
  
});
