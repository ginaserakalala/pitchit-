install:
	sudo apt update
	sudo apt install make maven default-jdk default-jre
	mvn -version
	java -version

dev:
	mvn clean install compile package

init_db:
	sudo mysql < db/setup.sql