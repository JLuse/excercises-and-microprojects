Sentry.init do |config|
  config.dsn = 'https://a56a5046cccc4dc2a50ea61aa0425fd0@o565143.ingest.sentry.io/4504733770186752'
  config.breadcrumbs_logger = [:active_support_logger, :http_logger]

  # Set traces_sample_rate to 1.0 to capture 100%
  # of transactions for performance monitoring.
  # We recommend adjusting this value in production.
  config.traces_sample_rate = 1.0
  # or
  config.traces_sampler = lambda do |context|
    true
  end
end