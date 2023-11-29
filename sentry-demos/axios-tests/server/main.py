from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sentry_sdk

sentry_sdk.init(
    dsn="https://0163ef92fbe746f54586bb381cfd57cd@o565143.ingest.sentry.io/4506305264025600",
    traces_sample_rate=1.0,
    debug=True
)
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://127.0.0.1",
    "http://127.0.0.1:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/api/food")
async def food():
    return {"message": ["apple", "pizza", "candy", "burger"] }

@app.get("/error")
async def error():
    raise ReferenceError("TestingError")