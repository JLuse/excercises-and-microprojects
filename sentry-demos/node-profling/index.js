const Sentry = require('@sentry/node')
const express = require('express');
const { ProfilingIntegration } = require('@sentry/profiling-node');

// import { ProfilingIntegration } from "@sentry/profiling-node";

const app = express();

Sentry.init({
  dsn: 'https://cc3a5d3460671ce7749ed4480342653e@o565143.ingest.sentry.io/4506078799527936',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    new ProfilingIntegration(),
  ],
  debug: true,
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// All your controllers should live here
app.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.get("/abc", function rootHandler(req, res) {
  const transaction = Sentry.startTransaction({
    op: "transaction",
    name: "My Transaction",
  });
  let math = 5 * 25
  console.log(math)
  // Any code executed between startTransaction and transaction.finish
  // will now be automatically profiled.
  transaction.finish();
  res.end("Anotha one");
});

// The error handler must be registered before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.listen(3000);