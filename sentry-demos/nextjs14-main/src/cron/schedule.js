const Sentry = require("@sentry/nextjs")
const cron = require('node-cron');

const cronWithCheckIn = Sentry.cron.instrumentNodeCron(cron);

// Schedule a job to run every minute

cronWithCheckIn.schedule('* * * * *', 
  () => {
  console.log('Running a task every minute');
    // Place your task logic here, e.g., fetching data from an API and saving it to a database
  },
  {name: "my-cron-job"}
);