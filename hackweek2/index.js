// import SentryCli from "@sentry/cli";
const SentryCli = require('@sentry/cli');

let cli = new SentryCli().releases
// cli.new('some-release', {projects: ['project']})
console.log(cli)