const express = require('express');
const db = require('./db');

const Sentry = require('@sentry/node')

const app = express();

Sentry.init({
  dsn: 'https://452468b312d725ff7d1738caa4d58516@o565143.ingest.sentry.io/4506243254845440',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0,
  debug: true,
  // Set sampling rate for profiling - this is relative to tracesSampleRate
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());


app.get('/debug', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM teachers');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.use(Sentry.Handlers.errorHandler());
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});