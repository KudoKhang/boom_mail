from typing import List
import uvicorn
from fastapi import FastAPI, File, Request, Response, status, HTTPException
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
    "https://boomcheck.io",
    "https://perfectmoney.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/user", status_code=200)
async def get_user(token):
    stt = get_info_user(token)
    if stt == "Invalid Token":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Token")
    else:
        return stt


@app.post("/api/signup", status_code=200)
async def get_data_signup(first_name, last_name, email, password):
    stt = signup(first_name, last_name, email, password)
    if stt == 400:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email exist!")


@app.post("/api/login", status_code=200)
async def get_data_login(email, password):
    stt = login(email, password)
    if stt == 401:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Password or Email incorrect, please try again!")
    else:
        return stt


@app.post("/api/changepassword", status_code=200)
async def change_pass(token, old_password, new_password):
    stt = change_password(token, old_password, new_password)
    if stt == 401:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Token")
    elif stt == 400:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Old password incorrect")


@app.post("/validation", status_code=200)
async def validation(token):
    return validation_token(token)


@app.post("/api/buy", status_code=200)
async def buy_request(token, package_name):
    stt = buy(token, package_name)
    if stt == "Invalid Token":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Token!")
    elif stt == "Not enough":
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Not enough money")


@app.post("/api/spam", status_code=200)
async def start_spam(token: str, targets: List, n_spam: int):
    # stt = spam(token, targets, int(n_spam))
    stt = spam_mailgun(token, targets, int(n_spam))
    if stt == 401:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Token!")
    elif stt == 403:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not enough resquest!")


@app.post("/api/admin_edit", status_code=200)
async def edit_user(token: str, email_user: str, properties: str, value: str):
    stt = admin_edit_user(token, email_user, properties, value)
    if stt == "Invalid Token":
       raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Token!")


@app.get("/api/admin_get_all_user", status_code=200)
async def get_all_user(token: str):
    stt = get_info_all_user(token)
    if stt == "Invalid Token":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Token!") 
    else:
        return stt


@app.get("/api/admin_search", status_code=200)
async def search_user(token: str, email_user: str):
    stt = admin_search_user(token, email_user)
    if stt == "Invalid Token":
       raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Token!")
    else:
        return stt


@app.get("/api/admin_get_amount_total", status_code=200)
async def admin_get_amount_total(token: str):
    stt = get_amount_total(token)
    if stt == "Invalid Token":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Token!") 
    else:
        return stt


@app.get("/api/payment_failed")
async def direct_to_homepage():
    return RedirectResponse("https://boomcheck.io/dashboard")
    

@app.post("/api/payment/")
async def payment(token: str = None, request: Request = None):
    res = await request.body()
    res = res.decode("utf-8")
    PAYMENT_AMOUNT = res.split("&")[1].split("=")[1]
    recharge(token, float(PAYMENT_AMOUNT))
    return RedirectResponse("https://boomcheck.io/dashboard")
        

if __name__ == '__main__':
    uvicorn.run(app)
    # uvicorn.run(app, host="localhost", port=8001)