const express = require ('express')
// app can use all the express methods by assiging app
const app = express()
const PORT = 8000

const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");


Sentry.init({
  dsn: "https://e9322a4e7b6347be8f849f65c943b7ce@o565143.ingest.sentry.io/4503995763916800",

  tracesSampleRate: 1.0,
});

// app.use(Sentry.Handlers.requestHandler());

// const transaction = Sentry.startTransaction({
//   op: "test",
//   name: "My First Test Transaction",
// });

// setTimeout(() => {
//   try {
//     zoo();
//   } catch (e) {
//     Sentry.captureException(e);
//   } finally {
//     transaction.finish();
//   }
// }, 99);



// ----- Server code: ------ //
const drake = {
  'age': 35,
  'birthname': 'Aubrey Drake Graham',
  'birthLocation': 'Toronto, Ontario, Canada'
}

app.get('/', function rootHandler (req, res) {
  // server knows to look in the current folder/directory
  res.sendFile(__dirname + '/index.html')
})

// app.use(function onError(err, req, res, next) {
//   // The error id is attached to `res.sentry` to be returned
//   // and optionally displayed to the user for support.
//   res.statusCode = 500;
//   res.end(res.sentry + "\n");
// });

app.get('/api', (req, res)=> {
  res.json(drake)
})

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})
