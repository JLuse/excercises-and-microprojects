const Sentry =  require('@sentry/node')
const http = require('http');

Sentry.init({
  dsn: 'https://ccd7ffed87bebfa0b8e508d71ee56b21@o565143.ingest.sentry.io/4506118047793152',
  integrations: [new Sentry.Integrations.Undici()],
  // Performance Monitoring
  tracesSampleRate: 1.0,
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
  // debug: true,
  // beforeSend(event) {
  //   console.log(event)
  // }
});

const server = http.createServer((req, res) => {
  // console.log(Sentry.getCurrentHub().getScope().setSDKProcessingMetadata({ req })) 

    try {
      if (req.url === '/') {
        Sentry.getCurrentHub().getScope().setSDKProcessingMetadata({ req })
        console.log(Sentry.getCurrentHub()._stack[0].client)
        // Simulate an error by throwing an exception
        throw new Error('This is a deliberate error for testing AgianAgainAgain.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Request was successful.');
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      Sentry.captureException(error);
      res.end('An error occurred!!!.');
    }

  });

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
