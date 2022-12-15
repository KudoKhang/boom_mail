from typing import List
import uvicorn

from fastapi import FastAPI, File, UploadFile, Request
from fastapi.params import Query
from starlette.responses import RedirectResponse

import os
import random
import time

from funcs import *
from fastapi.middleware.cors import CORSMiddleware


app_desc = """<h2>[Target / Numbers of spam / Time sleep]</h2>"""
app = FastAPI(title="Boom Mail API", description=app_desc)

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/user")
def get_user(token):
    return get_info_user(token)


@app.post("/api/signup")
def get_data_signup(first_name, last_name, email, password):
    return signup(first_name, last_name, email, password)


@app.post("/api/login")
def get_data_login(email, password):
    return login(email, password)


@app.post("/validation")
def validation(token):
    return validation_token(token)


@app.post("/api/buy")
def buy(token, package_name):
    return buy(token, package_name)


@app.post("/api/spam")
async def start_spam(token: str, targets: List, n_spam: int):
    spam(token, targets, int(n_spam))


@app.post("/api/payment/")
async def payment(SUCCESS: bool = True, token: str = None, request: Request = None):
    if SUCCESS:
        res = await request.body()
        res = res.decode("utf-8")
        PAYMENT_AMOUNT = res.split("&")[1].split("=")[1]
        recharge(token, float(PAYMENT_AMOUNT))
        return "Done!"
    else:
        # Direct to home
        return "Failed!"


if __name__ == '__main__':
    # uvicorn.run(app)
    uvicorn.run(app, host="localhost", port=8001)