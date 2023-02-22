const express = require("express");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const app = express();
const port = 3000;

Sentry.init({
  dsn: "https://a584a708e8a543e0aa271f8cbdbc1941@o565143.ingest.sentry.io/4504635574452224",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({
      // to trace all requests to the default router
      app,
      // alternatively, you can specify the routes you want to trace:
      // router: someRouter,
    }),
  ],
  // beforeSend(event) {
  //   if (event.transaction === 'POST /graphql') {
  //     console.log(event)
  //     return null
  //   }
  //   return event;
  // },
  // debug: true,
  tracesSampleRate: 1.0,


});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});

app.get("/new", function rootHandler(req, res) {
  // res.end("This a new a new");
  throw new Error("This is an error from new");
});

// app.get("/debug-sentry?some_param=10&other_param=&last_param=\"Hello\"", function mainHandler(req, res) {
//   throw new Error("My first Sentry error!");
// });

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.use(Sentry.Handlers.errorHandler());

app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

// app.listen(3000);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
