# Memory App

## Local Environment

### Developing

#### Start backend and frontend
```
mvn spring-boot:run
```
Hier wird das frontend und backend als eine App unter dem Port 8080 gestartet.
<br/>
Vorsicht: Änderungen im JS unter ``./frontend`` werden hier nicht übernommen
<br />
URL frontend: http://localhost:8080
<br />
URL api: http://localhost:8080/api

#### Start frontend
```
cd frontend
npm start
```
Hier wird das frontend für die lokale entwicklung gestartet. Das backend muss getrennt gestartet werden.
<br />
URL: http://localhost:3000

#### Compile
```
mvn package
```
Compilen von frontend und backend in ein JAR zum deployment.

### Database
Die Datenbank ist derzeit noch in-memory und wird bei jedem start der app mit Testdaten befüllt. Anpassungen unter:
<br />
```

```
