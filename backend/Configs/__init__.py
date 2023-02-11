import os
import random

#------------ configs ------------------
secret_key = "devbyk"
sendgrid_key = "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"
mailgun_key = "7c69ed36c0114dbe0e5d65618b5080ae-c2efc90c-46c9d97a"
time_sleep = 0
time_token_available = 60 * 30

package = {
    "normal": [1000, 20],
    "vip"   : [5000, 50],
    "pro"   : [10000, 90]
}

#-----------------------------------
domains = [
    'boomcheck.website',
    'boomcheck.tech',
    'boomcheck.shop',
    'boomcheck.online',
    'booomcheck.online',
    'boomchecks.tech',
    'booomcheck.tech',
    'boomcheck.store',
    'tophucthinh.xyz',
    'boomchecks.shop',
    'boomchecks.online',
    'boomcheck.io',
] 
 
#-----------------------------------

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

with open("Configs/bots.txt", "r") as f:
    bots = [line.rstrip() for line in f]

with open("Configs/subjects.txt", "r") as f:
    subjects = [line.rstrip() for line in f]

with open("Configs/contents.txt", "r") as f:
    contents = f.read().split('---')[:-1]

with open("Configs/names.txt", "r") as f:
    names = [line.rstrip() for line in f]

if __name__ == "__main__":
    print(random.choice(contents) + " " + str(random.randint(100000, 999999)))