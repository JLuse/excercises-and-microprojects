import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  app,
  dsn: "https://d66e8701865a470b997505225aff1e52@o565143.ingest.sentry.io/4504136926232576",
  integrations: [
    new BrowserTracing({
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// app.use(router);
app.mount("#app");

createApp(App).mount('#app')
