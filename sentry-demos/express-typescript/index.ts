// import express from 'express';
import express, { Express, Request, Response } from 'express';
import * as Sentry from "@sentry/node";

// const app = express();
const app: Express = express();
const port = 2121;

Sentry.init({
  dsn: "https://bb50cedf627b4d199e59236dc8bcdde2@o982579.ingest.sentry.io/4505241974800384",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    // Automatically instrument Node.js libraries and frameworks
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  debug: true,
});

// try {
//   // Code that may generate an error
//   throw new Error("This is a test error");
// } catch (error) {
//   // Capture and send the error to Sentry
//   Sentry.captureException(error);
// }

app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

app.get("/debug", (req: Request, res: Response) => {
  throw new Error("My first Sentry error!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
