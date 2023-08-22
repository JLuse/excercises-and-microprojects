const express = require('express')
const Sentry = require("@sentry/node");
const Tracing = require('@sentry/tracing');
const { writeFileSync } = require("fs");

// const { RewriteFrames: RewriteFramesIntegration } = require('@sentry/integrations');

const { ProfilingIntegration } = require("@sentry/profiling-node");

const app = express()
const port = 3000;

Sentry.init({
  // trial org
  dsn: "https://521c418fa4094f419c7d6d5c57ccebf7@o982579.ingest.sentry.io/4505195219845120",
  
  // Sponsodered org
  // dsn: "https://1b4e217ed303af8a67ee4089f6510b7f@o565143.ingest.sentry.io/4505745045454848",
  debug: true,
  // How to get profile envelope
  // transport: () => {
  //   let i = 0;
  //   return {
  //     send(e){
  //       writeFileSync(`envelope-${++i}.json`, JSON.stringify(e, null, 2));
  //       return Promise.resolve()
  //     },
  //     flush(){
  //       return Promise.resolve()
  //     }
  //   }
  // },
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
    // Automatically instrument Node.js libraries and frameworks
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
    new ProfilingIntegration(),
    // new RewriteFramesIntegration(
    //   {
    //     // root path that will be stripped from the current frame's filename by the default iteratee if the filename is an absolute path
    //     root: global.__rootdir__
    //   })
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  // beforeSend: (event) => {
  //   // if (event?.response?.status === '[0]') {
  //   // return null;
  //   // }
  //   console.log(event)
  //   return event;
  //   },
  // tracesSampler: samplingContext => {
  //   console.log(samplingContext.request.headers['user-agent'])
  //  }
  // tracesSampler: (samplingContext) => {
  //   const headers = samplingContext?.request?.headers
  //   const userAgent = headers ? headers['user-agent'] : null
  //    if (userAgent && userAgent.indexOf('Mozilla') !== -1) {
  //     console.log('Should be filtered')
  //   }
    // if (samplingContext.request) {
    // const headers = samplingContext?.request?.headers
    // const userAgent = headers ? headers['user-agent'] : null
    // // if (userAgent && userAgent.indexOf('ELB-') !== -1) {
    // // return 0
    // // }
    // // }
    // // return app.get('sentry')['tracesSampleRate']
    // },
});

// RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.all('/', (req, res) => {
    // console.log("Just got a request!")
    res.send('Yo!')
})

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.get('/transaction', (req, res) => {
  const transaction = Sentry.startTransaction({ name: "new-transaction" });
  const span = transaction.startChild({ op: "functionX" }); // This function returns a Span
  // functionCallX
  span.finish(); // Remember that only finished spans will be sent with the transaction
  transaction.finish(); // Finishing the transaction will send it to Sentry
})

app.get('/custom-metric', (req, res) => {

  const transaction = Sentry.getCurrentHub().getScope().getTransaction();
  const span = transaction.startChild({ op: "custom" });

  transaction.setMeasurement("custom.test_metric", 20.00, "second");
  transaction.setMeasurement("custom.another_test_metric", 44.00, "second");

  span.finish(); // Remember that only finished spans will be sent with the transaction
  transaction.finish(); // Finishing the transaction will send it to Sentry
})

app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.get('/error400', (req, res) => {
  // res.status(400).json({ error: 'Bad Request' });
  try {
    // Simulate an error with a 400 status
    // throw new Error('Bad Request');
    const requestBody = req.body; // Access the request body
    throw new Error(`Bad Request: ${JSON.stringify(requestBody)}`);
  } catch (error) {
    // Capture the error and send it to Sentry
    Sentry.captureException(error);
  }
});

app.post('/trigger-error', (req, res) => {
  try {
    // Simulate an error with request body information
    const requestBody = req.body;
    throw new Error(`Error occurred: ${JSON.stringify(requestBody)}`);
  } catch (error) {
    // Capture the error and send it to Sentry
    Sentry.captureException(error);

    // Respond with an error message
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// 
// import { ProfilingIntegration } from "@sentry/profiling-node";
// "type": "module",