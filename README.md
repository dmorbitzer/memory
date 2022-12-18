# Web Project App

## Local Environment

### Software
* **Yarn**: 1.22.19
* **openJDK**: 18.0.2.1
* **Node.js**: 18.12.1
* **MariaDB** | **PostgreSQL**: *

### Initial setup
```
cd ./src/react
yarn install
````

### Developing
#### Start backend and frontend
```
mvn spring-boot:run
```
Hier wird das frontend und backend als eine App unter dem Port 8080 gestartet.
<br/>
Vorsicht: Änderungen im JS unter ``./src/react`` werden hier nicht übernommen
<br />
URL frontend: http://localhost:8080
<br />
URL api: http://localhost:8080/api

#### Start frontend
```
cd src/frontend
yarn start
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
