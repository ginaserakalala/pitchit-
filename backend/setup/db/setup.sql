create database pitch;
connect pitch;
CREATE USER 'dev'@'localhost' IDENTIFIED BY 'D3Vel0pM3nT';
GRANT ALL PRIVILEGES ON *.* TO 'dev'@'localhost';
FLUSH privileges;