import sentry_sdk
from sentry_sdk import capture_message

sentry_sdk.init(
    dsn="https://ca35d2e6803c4f98b3d27f353a15bf91@o565143.ingest.sentry.io/4504079916269568",

    # Enable performance monitoring
    debug=True,
    enable_tracing=True,
)


capture_message('Something went wrong')
division_by_zero = 1 / 0

# flush()