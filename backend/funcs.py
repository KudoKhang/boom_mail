import hashlib
import jwt

import time

import requests
import random
import sendgrid
from sendgrid.helpers.mail import *
from Configs import *
from connect_db import *

sg = sendgrid.SendGridAPIClient(sendgrid_key)

def spam(token, targets, n_spam):
    # Check request_remaining
    decoded_token = validation_token(token)

    if decoded_token:
        email = decoded_token["email"]
        cursor.execute("SELECT request_remaining FROM users WHERE email = %s", [email])
        request_remaining = cursor.fetchone()[0]

        if n_spam <= request_remaining:
            # Update request_remaining
            new_request_remaining = request_remaining - (n_spam * len(targets))
            cursor.execute("UPDATE users set request_remaining = %s where email = %s", [new_request_remaining, email])

            # Spam email to targets
            try:
                target = [(t, random.choice(names)) for t in targets]

                for spam in range(n_spam):
                    from_email = (random.choice(bots), random.choice(names))
                    to_email = target
                    subject = random.choice(subjects) + str(random.randint(1000, 100000))
                    content = Content("text/plain", random.choice(contents) + " " + str(random.randint(100000, 999999)))
                    mail = Mail(from_email, to_email, subject, content)
                    response = sg.client.mail.send.post(request_body=mail.get())
                    if response.status_code == 202:
                        print(f"{bcolors.OKGREEN} Successful")
                    time.sleep(time_sleep)
            except Exception as err:
                print(err)

            print(f"{bcolors.OKBLUE}\nSuccessful sent {n_spam * len(targets)} email spam to {len(targets)} targets!")
            return 200

        else:
            print(f"{bcolors.WARNING}Not enough resquest!")
            return 403
    else:
        print(f"{bcolors.WARNING}Invalid Token")
        return 401

def spam_mailgun(token, targets, n_spam):
    # Check request_remaining
    decoded_token = validation_token(token)

    if decoded_token:
        email = decoded_token["email"]
        cursor.execute("SELECT request_remaining FROM users WHERE email = %s", [email])
        request_remaining = cursor.fetchone()[0]

        idx = 0
        successed_count = 0
        
        if n_spam <= request_remaining:
            try:
                target = [(t, random.choice(names)) for t in targets]

                spam = 0
                while spam < n_spam :
                    subject = random.choice(subjects) + str(random.randint(1000, 100000))
                    content = random.choice(contents) + " " + str(random.randint(100000, 999999))

                    response = requests.post(f"https://api.mailgun.net/v3/{domains[idx]}/messages",
                    auth=("api", mailgun_key),
                    data={"from": f"{random.choice(names)} <{random.choice(bots) + '@' + domains[idx]}>",
                        "to": target,
                        "subject": subject,
                        "text": content})
                    if response.status_code == 200:
                        successed_count += len(target)
                    
                    if response.status_code == 403:
                        if idx == len(domains):
                            return 403
                        idx += 1
                    spam += 1
                    time.sleep(time_sleep)
                
               # Update request_remaining 
                new_request_remaining = request_remaining - successed_count
                cursor.execute("UPDATE users set request_remaining = %s where email = %s", [new_request_remaining, email])

                print(f"{bcolors.OKBLUE}\nSuccessful sent {successed_count} email spam to {len(targets)} targets!")
            
            except Exception as err:
                print(err)
            return 200
        else:
            print(f"{bcolors.WARNING}Not enough resquest!")
            return 403
    else:
        print(f"{bcolors.WARNING}Invalid Token")
        return 401

def admin_edit_user(token, email_user, properties, value):
    decoded_token = validation_token(token)
    if decoded_token:
        email = decoded_token["email"]
        if email == 'admin':
            if properties == "first_name":
                cursor.execute("UPDATE users set first_name = %s where email = %s", [value, email_user])

            if properties == "last_name":
                cursor.execute("UPDATE users set last_name = %s where email = %s", [value, email_user])

            if properties == "email":
                cursor.execute("UPDATE users set email = %s where email = %s", [value, email_user])

            if properties == "amount":
                cursor.execute("UPDATE users set amount = %s where email = %s", [value, email_user])

            if properties == "amount_total":
                cursor.execute("UPDATE users set amount_total = %s where email = %s", [value, email_user])
            
            if properties == "request_remaining":
                cursor.execute("UPDATE users set request_remaining = %s where email = %s", [value, email_user])
            
            if properties == "delete":
                cursor.execute("DELETE FROM users where email = %s", [email_user])

            return "Successful"
        else:
            return "Invalid Token"
    else:
        return "Invalid Token"

def admin_search_user(token, email_user):
    decoded_token = validation_token(token)
    if decoded_token:
        email = decoded_token["email"]
        if email == 'admin':
            
            cursor.execute("SELECT * FROM users WHERE email = %s", [email_user])
            try:
                info = cursor.fetchall()[0]

                info_final = {"first_name": info[0],
                            "last_name": info[1],
                            "amount": info[3],
                            "amount_total": info[4],
                            "request_remaining": info[5],
                            "email": info[2],
                            }
                return [info_final]
            except:
                return []
            

        else:
            print(f"{bcolors.WARNING}Invalid Token!")
            return "Invalid Token"
    else:
        print(f"{bcolors.WARNING}Invalid Token!")
        return "Invalid Token"

def signup(first_name, last_name, email, password):
    try:
        # Store user info to database
        sql = "INSERT INTO users (first_name, last_name, email, password, amount_total, amount, request_remaining, role) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        password = str(hashlib.md5(password.encode()).digest())
        val = (first_name, last_name, email, password, 0, 0, 0, 0)
        cursor.execute(sql, val)
        print(f"{bcolors.OKCYAN}Store user to database successfully!")
        return 200
    except:
        print(f"{bcolors.WARNING}Email had exist, please chose other email!")
        return 400

def login(email, password):
    try:
        cursor.execute("SELECT password FROM users WHERE email = %s", [email])
        password_from_db = cursor.fetchone()[0]
        password_encode = str(hashlib.md5(password.encode()).digest())
        if password_encode == password_from_db:
            print(f"{bcolors.OKBLUE}Login Successfully!")

            dt = int(time.time()) + time_token_available

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
            return 401
    except:
        print(f"{bcolors.WARNING}Email not exist, please try again or sign-up here!")
        return 401

def get_info_user(token):
    decoded_token = validation_token(token)
    if decoded_token:
        try:
            email = decoded_token["email"]
            cursor.execute("SELECT * FROM users WHERE email = %s", [email])
            info = cursor.fetchall()[0]
            info_final = {"first_name": info[0],
                        "last_name": info[1],
                        "amount": info[3],
                        "request_remaining": info[5],
                        "email": email,
                        }
            return info_final
        except Exception as err:
            print(f"{bcolors.WARNING}{err}")
            return "Invalid Token"
    else:
        print(f"{bcolors.WARNING}Invalid Token!")
        return "Invalid Token"

def get_info_all_user(token):
    try:
        decoded_token = validation_token(token)
        if decoded_token:
            email = decoded_token["email"]
            if email == 'admin':
                cursor.execute('SELECT * FROM users')
                users = cursor.fetchall()
                info_user = []
                for user in users:
                    info = {
                        "first_name": user[0],
                        "last_name": user[1],
                        "email": user[2],
                        "amount": user[3],
                        "amount_total": user[4],
                        "request_remaining": user[5]
                    }

                    info_user.append(info)
                return info_user
            else:
                print(f"{bcolors.WARNING}Invalid Token!")
                return "Invalid Token"  
        else:
            print(f"{bcolors.WARNING}Invalid Token!")
            return "Invalid Token" 
    except Exception as err:
        print(f"{err} in function get_info_all_user")
        return "Invalid Token"  

def get_amount_total(token):
    try:
        decoded_token = validation_token(token)
        if decoded_token:
            email = decoded_token["email"]
            if email == 'admin': 
                cursor.execute('SELECT amount_total FROM users')
                amount_total = cursor.fetchall()
                total = 0
                for amount in amount_total:
                    total += amount[0]
                return total
            else:
                print(f"{bcolors.WARNING}Invalid Token!")
                return "Invalid Token"  
        else:
            print(f"{bcolors.WARNING}Invalid Token!")
            return "Invalid Token"  
    except Exception as err:
        print(f"{err} in function get_info_all_user")
        return "Invalid Token"   

def validation_token(token):
    try:
        decode_token = jwt.decode(token, secret_key, algorithms=['HS256'])
        print("Token is still valid and active")
        return decode_token
    except jwt.ExpiredSignatureError:
        print("Token expired. Get new one")
    except jwt.InvalidTokenError:
        print("Invalid Token")

def recharge(token, amount):
    # VALIDATION
    decoded_token = validation_token(token)
    if decoded_token:
        try:
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
            # cnx.commit()

            print(f"{bcolors.OKCYAN}Recharged {amount}$ to {email} account!")
        except Exception as err:
            print(f"{bcolors.WARNING}{err}")
    else:
        print(f"{bcolors.WARNING}Invalid Token")

def buy(token, package_name):
    decoded_token = validation_token(token)

    if decoded_token:
        try:
            email = decoded_token["email"]

            cursor.execute("SELECT amount FROM users WHERE email = %s", [email])
            amount = cursor.fetchone()[0]

            if package[package_name][1] > amount:
                print(f"{bcolors.WARNING}Not enough amount, please recharge to conntinue...")
                return "Not enough"

            else:
                # Sub monney
                amount_remaining = amount - package[package_name][1]
                cursor.execute("UPDATE users set amount = %s where email = %s", [amount_remaining, email])

                cursor.execute("SELECT request_remaining FROM users WHERE email = %s", [email])
                request_remaining = cursor.fetchone()[0]
                request_current = request_remaining + package[package_name][0]
                cursor.execute("UPDATE users set request_remaining= %s where email = %s", [request_current, email])

                print(f"{bcolors.OKBLUE}Successfully bought {package[package_name][0]} to account {email}")
                return "Successfully"
        except Exception as err:
           print(f"{bcolors.WARNING}{err}") 
    else:
        print(f"{bcolors.WARNING}Invalid Token")
        return "Invalid Token" 

def change_password(token, old_password, new_password):
    decoded_token = validation_token(token)

    if decoded_token:
        try:
            email = decoded_token["email"] 

            cursor.execute("SELECT password FROM users WHERE email = %s", [email])

            old_password_endcode = str(hashlib.md5(old_password.encode()).digest()) 

            password_from_database = cursor.fetchone()[0]

            if old_password_endcode == password_from_database:
                new_password_endcode = str(hashlib.md5(new_password.encode()).digest())
                cursor.execute("UPDATE users set password = %s where email = %s", [new_password_endcode, email])

                print(f"{bcolors.OKCYAN}Password changed!")

            else:
                print(f"{bcolors.WARNING}Old password incorrect!")
                return 400
        except Exception as err:
            print(f"{bcolors.WARNING}{err}")
    else:
        print(f"{bcolors.WARNING}Invalid Token")
        return 401

if __name__ == '__main__':
    signup("khang", "nghia", "test2@gmail.com", "123123")
    # token = login("admin", "123123")
    # change_password(token, "123123", "123123")
    # spam(token, ["thanhchem.k39a2@gmail.com"], 1)
    # print(get_info_user(token))
    # print(validation_token(token))
    # recharge(token, 1000)
    # buy(token, "vip")
    # admin_edit_user(token, "test@gmail.com", "last_name", "Nghia")
    # print(get_info_all_user(token))
    # get_amount_total(token)

    # cursor.execute('SELECT * FROM users')
    # users = cursor.fetchall()
    # print(users)