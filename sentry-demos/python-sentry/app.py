import sentry_sdk

sentry_sdk.init(
    dsn="https://ca35d2e6803c4f98b3d27f353a15bf91@o565143.ingest.sentry.io/4504079916269568",

    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production.
    traces_sample_rate=1.0,
)

division_by_zero = 1 / 0

print('Yo world')