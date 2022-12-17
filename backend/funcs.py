import mysql.connector

import hashlib
import jwt

import time

import random
import sendgrid
from sendgrid.helpers.mail import *
from Configs import *
from connect_db import *

sg = sendgrid.SendGridAPIClient("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")
secret_key = "devbyk"

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


def spam(token, targets, n_spam):
    # Check request_remaning
    decoded_token = validation_token(token)

    if decoded_token:
        email = decoded_token["email"]
        cursor.execute("SELECT request_remaining FROM users WHERE email = %s", [email])
        request_remaining = cursor.fetchone()[0]

        if n_spam <= request_remaining:
            # Update request_remaning
            new_request_remaining = request_remaining - n_spam
            cursor.execute("UPDATE users set request_remaining = %s where email = %s", [new_request_remaining, email])
            cnx.commit()

            # Spam email to targets
            try:
                for target in targets:
                    for spam in range(n_spam):
                        from_email = Email(random.choice(bots))
                        to_email = To(target)
                        subject = random.choice(subjects) + str(random.randint(1000, 100000))
                        content = Content("text/plain", random.choice(contents) + " " + str(random.randint(100000, 999999)))
                        mail = Mail(from_email, to_email, subject, content)
                        response = sg.client.mail.send.post(request_body=mail.get())
                        if response.status_code == 202:
                            print(f"{bcolors.OKGREEN} Successful")
                        time.sleep(1)
            except Exception as err:
                print(err)

            print(f"{bcolors.OKBLUE}\nSuccessful sent {n_spam * len(targets)} email spam to {len(targets)} targets!")

        else:
            print(f"{bcolors.WARNING}Not enough resquest!")
    else:
        print(f"{bcolors.WARNING}Invalid Token")


def signup(first_name, last_name, email, password):
    # Check email had axist
    cursor.execute("SELECT * FROM users WHERE email = %s", [email])

    if cursor.fetchone() is None:
        # Store user info to database
        sql = "INSERT INTO users (first_name, last_name, email, password, amount_total, amount, request_remaining) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        password = str(hashlib.md5(password.encode()).digest())
        val = (first_name, last_name, email, password, 0, 0, 0)
        cursor.execute(sql, val)
        cnx.commit()
        # return 202
        print(f"{bcolors.OKCYAN}Store user to database successfully!")
    else:
        # return 400
        print(f"{bcolors.WARNING}Email had exist, please chose other email!")

def login(email, password):
    try:
        cursor.execute("SELECT password FROM users WHERE email = %s", [email])
        password_from_db = cursor.fetchone()[0]
        password_encode = str(hashlib.md5(password.encode()).digest())
        if password_encode == password_from_db:
            print(f"{bcolors.OKBLUE}Login Successfully!")

            dt = int(time.time()) + (60 * 60 * 3)

            payload_data = {
                "email": email,
                "exp": dt
            }

            encoded_token = jwt.encode(
                payload=payload_data,
                key=secret_key,
                algorithm='HS256'
            )

            return encoded_token

        else:
            print(f"{bcolors.WARNING}Password is incorrect, please try again!")
    except:
        print(f"{bcolors.WARNING}Email not exist, please try again or sign-up here!")



def get_info_user(token):
    decoded_token = validation_token(token)
    if token:
        email = decoded_token["email"]
        cursor.execute("SELECT * FROM users WHERE email = %s", [email])
        info = cursor.fetchall()[0]
        info_final = {"first_name": info[0],
                      "last_name": info[1],
                      "amount": info[3],
                      "request_remaning": info[5]}
        return info_final
    else:
        print(f"{bcolors.WARNING}Invalid Token!")


def validation_token(token):
    try:
        decode_token = jwt.decode(token, secret_key, algorithms=['HS256'])
        print("Token is still valid and active")
        return(decode_token)
    except jwt.ExpiredSignatureError:
        print("Token expired. Get new one")
    except jwt.InvalidTokenError:
        print("Invalid Token")

def recharge(token, amount):
    # VALIDATION
    decoded_token = validation_token(token)
    if decoded_token:
        email = decoded_token["email"]

        # UPDATE AMOUNT
        cursor.execute("SELECT amount FROM users WHERE email = %s", [email])
        current_amount = cursor.fetchone()[0]
        new_amount = current_amount + amount
        cursor.execute("UPDATE users set amount = %s where email = %s", [new_amount, email])

        # UPDATE AMOUNT TOTAL
        cursor.execute("SELECT amount_total FROM users WHERE email = %s", [email])
        current_amount_total = cursor.fetchone()[0]
        new_amount_total = current_amount_total + amount
        cursor.execute("UPDATE users set amount_total = %s where email = %s", [new_amount_total, email])
        cnx.commit()

        print(f"{bcolors.OKCYAN}Recharged {amount}$ to {email} account!")
    else:
        print(f"{bcolors.WARNING}Invalid Token")


def buy(token, package_name):
    decoded_token = validation_token(token)

    if decoded_token:
        email = decoded_token["email"]
        package = {"normal": [1000, 20],
                   "vip": [5000, 80],
                   "pro": [10000, 130]}

        cursor.execute("SELECT amount FROM users WHERE email = %s", [email])
        amount = cursor.fetchone()[0]

        if package[package_name][1] > amount:
            print(f"{bcolors.WARNING}Not enough amount, please recharge to conntinue...")
        else:
            # Sub monney
            amount_remaining = amount - package[package_name][1]
            cursor.execute("UPDATE users set amount = %s where email = %s", [amount_remaining, email])

            cursor.execute("SELECT request_remaining FROM users WHERE email = %s", [email])
            request_remaining = cursor.fetchone()[0]
            request_current = request_remaining + package[package_name][0]
            cursor.execute("UPDATE users set request_remaining= %s where email = %s", [request_current, email])
            cnx.commit()

            print(f"{bcolors.OKBLUE}Successfully bought {package[package_name][0]} to account {email}")

    else:
        print(f"{bcolors.WARNING}Invalid Token")


def change_password(token, old_password, new_password):
    decoded_token = validation_token(token)

    if decoded_token:
        email = decoded_token["email"] 

        cursor.execute("SELECT password FROM users WHERE email = %s", [email])

        old_password_endcode = str(hashlib.md5(old_password.encode()).digest()) 

        password_from_database = cursor.fetchone()[0]

        if old_password_endcode == password_from_database:
            new_password_endcode = str(hashlib.md5(new_password.encode()).digest())
            cursor.execute("UPDATE users set password = %s where email = %s", [new_password_endcode, email])
            cnx.commit()

            print(f"{bcolors.OKCYAN}Password changed!")

        else:
            print(f"{bcolors.WARNING}Old password incorrect!")
    else:
        print(f"{bcolors.WARNING}Invalid Token")

if __name__ == '__main__':
    # signup("khang", "nghia", "test3@gmail.com", "123123")
    token = login("test@gmail.com", "123123")
    change_password(token, "123123", "123123")
    # spam(token, ["thanhchem.k39a2@gmail.com"], 15000)
    # print(get_info_user(token))
    # print(validation_token(token))
    # logout(token)
    # recharge(token, 1000)
    # buy(token, "vip")



    # cursor.execute('SELECT * FROM users')
    # users = cursor.fetchall()
    # print(users)