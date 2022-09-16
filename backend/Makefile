update:
	- lsof -ti tcp:8080 | xargs kill
	git pull
	mvn package -DskipTests
	nohup java -jar target/pitch-It-0.0.1-SNAPSHOT.jar &

push:
	git add .
	git commit -m "push from makefile"
	git push

db:
	mysql < script.sql