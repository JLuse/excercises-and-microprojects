class MyFirstCronJobWorker
  include Sidekiq::Worker
  include Sentry::Cron::MonitorCheckIns

  sentry_monitor_check_ins monitor_config: Sentry::Cron::MonitorConfig.from_interval(1, :minute)

  def perform
    # Simple job for testing
    Rails.logger.info "MyFirstCronJobWorker is running"
  end
end
