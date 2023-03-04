require 'sentry-ruby'
require 'uri'
require 'net/http'

Sentry.init do |config|
  config.dsn = 'https://24f1f7b73f174d50ad92e18562af3668@o565143.ingest.sentry.io/4504733333979137'

  # Set traces_sample_rate to 1.0 to capture 100%
  # of transactions for performance monitoring.
  # We recommend adjusting this value in production.
  config.traces_sample_rate = 1.0
  config.debug = true
  # or
  config.traces_sampler = lambda do |context|
    true
  end
end

# Sentry.capture_message("test message")
# begin
#   1 / 0
#   rescue ZeroDivisionError => exception
#   Sentry.capture_exception(exception)
# end

begin
  uri = URI("https://example.com/non-existent-endpoint")

  # Create a new request object
  request = Net::HTTP::Post.new(uri)

  # Make the request
  response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
    http.request(request)
  end

  # If the response status code indicates a server error, raise an exception
  if response.is_a?(Net::HTTPServerError)
    raise "Server error: #{response.code} #{response.message}"
  end
rescue NoRealError => exception
  Sentry.capture_exception(exception)
else
  Sentry.capture_message("test message 2")
end 