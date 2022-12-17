import mysql.connector

try:
    config = {
        'user': 'root',
        # 'password': 'secret',
        'host': '127.0.0.1',
        'port': '3306',
        'database': 'boomcheck',
        'raise_on_warnings': True
    }

    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    print("Database Connected!")

except Exception as e:
    print(e)
    print("Failed!")
