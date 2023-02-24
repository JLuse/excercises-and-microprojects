require 'sentry-ruby'

Sentry.init do |config|
  config.dsn = 'https://24f1f7b73f174d50ad92e18562af3668@o565143.ingest.sentry.io/4504733333979137'

  # Set traces_sample_rate to 1.0 to capture 100%
  # of transactions for performance monitoring.
  # We recommend adjusting this value in production.
  config.traces_sample_rate = 1.0
  # or
  config.traces_sampler = lambda do |context|
    true
  end
end

begin
  1 / 0
rescue ZeroDivisionError => exception
  Sentry.capture_exception(exception)
end

Sentry.capture_message("test message")