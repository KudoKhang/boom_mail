import mysql.connector
import os

try:
    config = {
        'user': 'root',
        'password': os.environ.get('PASS_DATABASE'),
        'host': '127.0.0.1',
        'port': '3306',
        'database': 'boomcheck',
        'raise_on_warnings': True
    }

    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    cursor.execute('set GLOBAL max_allowed_packet=67108864')
    cnx.autocommit = True
    print("Database Connected!")

except Exception as e:
    print(e)
    print("Failed!")

