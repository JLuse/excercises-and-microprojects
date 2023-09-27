let error = document.getElementById('error')
error.addEventListener('click', function() {
   throw new Error('CDN ERROR1')
})

let unhandledError = document.getElementById('unhandle')
unhandledError.addEventListener('click', function() {
   myUndefinedFunction();
   // setTimeout(() => {
   //    try {
   //       theFakeFunc3()
   //    } catch (e) {
   //       Sentry.captureException(e);
   //    } finally {
   //    transaction.finish();
   //    }
   // }, 1);
})