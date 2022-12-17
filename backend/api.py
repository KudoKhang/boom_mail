from typing import List
import uvicorn
from fastapi import FastAPI, File, UploadFile, Request, Response, status, HTTPException
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
    "http://boomcheck.io",
    "https://boomcheck.io"
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


@app.post("/api/signup", status_code=200)
def get_data_signup(first_name, last_name, email, password):
    stt = signup(first_name, last_name, email, password)
    if stt == 422:
        raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY)


@app.post("/api/login")
def get_data_login(email, password):
    return login(email, password)

@app.post("/api/changepassword")
def change_pass(token, old_password, new_password):
    return change_password(token, old_password, new_password)

@app.post("/validation")
def validation(token):
    return validation_token(token)


@app.post("/api/buy", status_code=200)
def buy_request(token, package_name):
    stt = buy(token, package_name)
    if stt == "Invalid Token":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    elif stt == "Not enough":
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST)




@app.post("/api/spam")
async def start_spam(token: str, targets: List, n_spam: int):
    spam(token, targets, int(n_spam))


@app.get("/api/payment_failed")
def direct_to_homepage():
    print("Failed!")
    return RedirectResponse("https://boomcheck.io")
    

@app.post("/api/payment/")
async def payment(token: str = None, request: Request = None):
    res = await request.body()
    res = res.decode("utf-8")
    PAYMENT_AMOUNT = res.split("&")[1].split("=")[1]
    recharge(token, float(PAYMENT_AMOUNT))
    print("Successful!")
    return RedirectResponse("https://boomcheck.io/login")
        


if __name__ == '__main__':
    uvicorn.run(app)
    # uvicorn.run(app, host="localhost", port=8001)