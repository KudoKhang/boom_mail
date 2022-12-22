import os
import random

#------------ configs ------------------
secret_key = "devbyk"
sendgrid_key = "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"
time_sleep = 3

package = {
    "normal": [1000, 20],
    "vip"   : [5000, 80],
    "pro"   : [10000, 130]
}

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

with open("Configs/targets.txt", "r") as f:
    targets = [line.rstrip() for line in f]

with open("Configs/subjects.txt", "r") as f:
    subjects = [line.rstrip() for line in f]

with open("Configs/contents.txt", "r") as f:
    contents = [line.rstrip() for line in f]

with open("Configs/names.txt", "r") as f:
    names = [line.rstrip() for line in f]

if __name__ == "__main__":
    print(random.choice(contents) + " " + str(random.randint(100000, 999999)))