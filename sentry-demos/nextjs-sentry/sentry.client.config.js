// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://875b162b0be648eaa85db613009c1a1a@o565143.ingest.sentry.io/4504087486922752',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  
  environment: 'dev',
  autoSessionTracking: true,
  attachStacktrace: true,
  debug: true,
  release: 'letsRelease@12345',

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    new Sentry.Replay({
      // Additional SDK configuration goes in here, for example:
      // beforeAddRecordingEvent(event) {
      //   console.log(event)
      // },
      maskAllText: false,
      blockAllMedia: true,
    }),


    new RewriteFramesIntegration({
      root: '/stuff/otherStuff/MoreStuff',
      prefix: 'user/',
      // iteratee: (frame) => frame
    })
  ],

  // beforeSend(event) {
  //   const foundBreadCrumb = event.breadcrumbs.find(breadcrumb => {
  //       if(breadcrumb.data !== undefined) {
  //         if(breadcrumb.data.url === 'https://jsonplaceholder.typicode.com/todos/3') {
  //           return true
  //         }
  //       }
  //     })
  //   return foundBreadCrumb ? null : event;
  // }
      // console.log(foundBread)

    // })
    // console.log(event.breadcrumbs)
    // const foundBreadcrumb = event.breadcrumbs.find(breadcrumb => {
    //   breadcrumb.data !== undefined && breadcrumb.data.url === 'https://jsonplaceholder.typicode.com/todos/3'
    // });
    // return foundBread ? null : event;
    
    // return event.breadcrumbs.forEach(breadcrumb => breadcrumb.data !== undefined && breadcrumb.data.url === 'https://jsonplaceholder.typicode.com/todos/3' ? null : event)
      //  breadcumb.data.url === 'https://jsonplaceholder.typicode.com/todos/3' ? console.log(breadcumb.data.url) : console.log('NOT IT'))
    // event.breadcrumbs.forEach(breadcumb => console.log(breadcumb.data !== undefined ? breadcumb.data.url : 'MISSING DATA Object'))
    // if (event.breadcrumbs.data === 'https://jsonplaceholder.typicode.com/todos/3') {
    // }
    
  // }

});

// [{category
//   : 
//   "fetch"
//   data
//   : 
//   method
//   : 
//   "GET"
//   status_code
//   : 
//   200
//   url
//   : 
//   "https://jsonplaceholder.typicode.com/todos/3"
//   [[Prototype]]
//   : 
//   Object
//   timestamp
//   : 
//   1690928301.97
//   type
//   : 
//   "http"}]
