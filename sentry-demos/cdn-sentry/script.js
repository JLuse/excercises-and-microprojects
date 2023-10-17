let error = document.getElementById('error')
error.addEventListener('click', function() {
   try {
      throw new Error('CDN ERROR1')
    } catch (e) {
      Sentry.captureException(e);
    }
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