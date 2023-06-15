class HealthController < ApplicationController
  def liveness
    Sentry.with_scope do |scope|
      transaction = Sentry.start_transaction(name:"Somenew#TESTer", op: "http.server")
      scope.set_transaction_name("Somenew#TESTer")
      scope.set_span(transaction)
      # finish the transaction, which will send it to Sentry automatically
      transaction.finish
    end
  end

  def trigger_job
    HelloWorldJob.perform_later
    redirect_to other_job_done_path
  end

  def trigger_sentry
    begin
      1 / 0
    rescue ZeroDivisionError => exception
      Sentry.capture_exception(exception)
    end
  end
end
