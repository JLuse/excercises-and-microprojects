const express = require('express')
const Sentry = require("@sentry/node");
const Tracing = require('@sentry/tracing');

// const { RewriteFrames: RewriteFramesIntegration } = require('@sentry/integrations');

// const { ProfilingIntegration } = require("@sentry/profiling-node");

const app = express()
const port = 3000;

Sentry.init({
  dsn: "https://521c418fa4094f419c7d6d5c57ccebf7@o982579.ingest.sentry.io/4505195219845120",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
    // Automatically instrument Node.js libraries and frameworks
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
    new ProfilingIntegration(),
    new RewriteFramesIntegration(
      {
        // root path that will be stripped from the current frame's filename by the default iteratee if the filename is an absolute path
        root: global.__rootdir__
      })
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,

  debug: true,
});

// RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});