from celery import Celery
from celery import signals
from celery.schedules import crontab

import sentry_sdk
from sentry_sdk.integrations.celery import CeleryIntegration
# sentry_sdk.init(
#     dsn="https://52bb39f25a8a45ecda7380ebb7e7f3bf@o565143.ingest.sentry.io/4506391168155648",
#     # Set traces_sample_rate to 1.0 to capture 100%
#     # of transactions for performance monitoring.
#     traces_sample_rate=1.0,
#     # Set profiles_sample_rate to 1.0 to profile 100%
#     # of sampled transactions.
#     # We recommend adjusting this value in production.
#     profiles_sample_rate=1.0,
# )

@signals.celeryd_init.connect
def init_sentry(**kwargs):
    sentry_sdk.init(
        dsn='https://52bb39f25a8a45ecda7380ebb7e7f3bf@o565143.ingest.sentry.io/4506391168155648',
        integrations=[CeleryIntegration(monitor_beat_tasks=True)],  # 👈
        enable_tracing=True,
        environment="DEV",
        release="v21.21",
    )

app = Celery('my_celery_app', 
             broker='redis://localhost:6379/0',
             backend='redis://localhost:6379/0')

app.conf.timezone = 'UTC'

@app.task
def my_scheduled_task():
    print("Task executed!")

app.conf.beat_schedule = {
    'run-me-every-minute': {
        'task': 'celery_app.my_scheduled_task',
        'schedule': crontab(),  # Executes every minute
    },
}