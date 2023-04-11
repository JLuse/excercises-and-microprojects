import sentry_sdk
from sentry_sdk.integrations.quart import QuartIntegration
from quart import Quart

app = Quart(__name__)

def before_send_event(event):
  print(event)
  return event

sentry_sdk.init(
    dsn="https://3485cf61ad034a3395b44dca70565075@o982579.ingest.sentry.io/4504969422176256",
    integrations=[
        QuartIntegration(),
    ],

    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production,
    traces_sample_rate=1.0,
    before_send=before_send_event
)

@app.route('/health', methods=['GET'])
def health():
    return {'status': 'pass'}