import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

const app = createApp(App)

// const router = createRouter({
//   // ...
// });

Sentry.init({
  app,
  dsn: "https://2686b9f2d1cd4ed383dbbb68477da096@o565143.ingest.sentry.io/4504136953823232",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(router);
app.mount("#app");

// const app = createApp(App)
