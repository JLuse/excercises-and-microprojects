require 'sentry-ruby'

Sentry.init do |config|
  config.dsn = 'https://422dbdab529a4bb8a9244180a77d6e77@o565143.ingest.sentry.io/4505359737159680'
  config.breadcrumbs_logger = [:active_support_logger, :http_logger]
  config.debug = true

  # Set traces_sample_rate to 1.0 to capture 100%
  # of transactions for performance monitoring.
  # We recommend adjusting this value in production.
  config.traces_sample_rate = 1.0
  # or
  # config.traces_sampler = lambda do |context|
  #   true
  # end
  config.traces_sampler = lambda do |sampling_context|
    # transaction_context is the transaction object in hash form
    # keep in mind that sampling happens right after the transaction is initialized
    # for example, at the beginning of the request
    transaction_context = sampling_context[:transaction_context]
    # p transaction_context
    
    op = transaction_context[:op]
    # p op
    transaction_name = transaction_context[:name]
    
    case op
    when /http/
      p "IN FIRST CASE AFTER HTTP - OPERATION!"
    
      case transaction_name
      when /new/
        p "IN SECOND CASE WITH - TRANSACTION NAME"
        0.0 
      when /tester/
        p "IN SECOND CASE WITH - TRANSACTION NAME"
        0.0
       else
        p "SENTTTT FROM TRANSACTION NAME"
        1.0
      end # END SECOND CASE - transaction_name

    else
      1.0 
    end # END FIRST CASE - op


  end # END TRACE SAMPLER
end