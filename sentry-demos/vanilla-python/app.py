import sentry_sdk

# Initialize Sentry with your DSN
sentry_sdk.init(
    dsn="https://9f2b073d9b58348dedc29297a7ea2161@o565143.ingest.sentry.io/4506345086124032",
    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    traces_sample_rate=1.0,
    # Set profiles_sample_rate to 1.0 to profile 100%
    # of sampled transactions.
    # We recommend adjusting this value in production.
    profiles_sample_rate=1.0,
)

division_by_zero = 1 / 0
# def trigger_error():
#     # This function will intentionally raise a division by zero error
#     return 1 / 0

# if __name__ == "__main__":
#     try:
#         trigger_error()
#     except Exception as e:
#         # The following line sends the error to Sentry
#         sentry_sdk.capture_exception(e)
#         print("Error has been sent to Sentry")
