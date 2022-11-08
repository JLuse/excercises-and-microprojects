Sentry.init({
  dsn: "https://f55f6c1df00c41cb97ab1263b743c584@o565143.ingest.sentry.io/4504097476640768",
  // this assumes your build process replaces `process.env.npm_package_version` with a value
  release: "my-project-name@" + '0.0.1',
  integrations: [new Sentry.BrowserTracing()],
  debug: true,

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

myUndefinedFunction();


console.log('HEEELLLLLOOOO')