sudo systemctl stop apache2
sudo systemctl disable apache2
sudo apt remove apache2
sudo apt autoremove
sudo apt clean all && sudo apt update && sudo apt dist-upgrade -y
sudo rm -rf /var/www/html

sudo apt install nginx -y
# sudo apt install nodejs -y
sudo apt install npm -y
sudo npm i -g pm2

# sudo apt install ufw
# sudo ufw enable
# sudo ufw allow "Nginx Full"

sudo rm /etc/nginx/sites-available/default
sudo rm /etc/nginx/sites-enabled/default


sudo sudo vim /etc/nginx/sites-available/boomcheck
sudo ln -s /etc/nginx/sites-available/boomcheck /etc/nginx/sites-enabled/boomcheck


# SSL
sudo apt install certbot python3-certbot-nginx
usudo fw status
sudo certbot --nginx -d example.com -d www.example.com
sudo systemctl status certbot.timer

# MINICONDA
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
chmod +x Miniconda3-latest-Linux-x86_64.sh
./Miniconda3-latest-Linux-x86_64.sh

# DATABSE
sudo apt install mysql-server -y
sudo systemctl start mysql.service

sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'devbyk';

mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;

CREATE DATABASE boomcheck;

sudo mysql -u root -p boomcheck < boomcheck.sql

# FOLDER
sudo chmod 777 /var/www/boomcheck 
sudo chown -R ubuntu /var/www/boomcheck