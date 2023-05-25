<?php
// require '/var/raven/init_autoloader.php';
require 'vendor/autoload.php';
  // \Sentry\init(['dsn' => 'https://822fd852db7c46da92489819465b507f@o982579.ingest.sentry.io/4505235530514432', 'environment' => 'uat3']);
\Sentry\init(['dsn' => 'https://822fd852db7c46da92489819465b507f@o982579.ingest.sentry.io/4505235530514432']);

try {
  $this->functionFailsForSure();
} catch (\Throwable $exception) {
  \Sentry\captureException($exception);
}

// OR

\Sentry\captureLastError();
// $exception = new Exception('uat3 test script php error');
// var_dump('Sentry::sent event ' . \Sentry\captureException($exception));
