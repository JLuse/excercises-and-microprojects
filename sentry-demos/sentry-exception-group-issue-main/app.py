from fastapi import FastAPI, Request
import os
import sentry_sdk

app = FastAPI()

sentry_dsn = "https://910bc848b8947cc91b0112b027488263@o565143.ingest.sentry.io/4506304981827584"
if sentry_dsn is None:
    raise ValueError("No SENTRY_DSN environment variable set")

sentry_sdk.init(
    dsn=sentry_dsn,
    traces_sample_rate=1.0,
    profiles_sample_rate=1.0,
    debug=True
)

@app.middleware("http")
async def no_op_request_middleware(request: Request, call_next):
    return await call_next(request)


@app.get("/error/explicit")
async def explicit_error():
    raise Exception("This is an explicit test error")


@app.get("/error/implicit")
async def implicit_error():
    div = 1 / 0