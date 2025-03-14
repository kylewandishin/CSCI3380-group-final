# GraffTrak

### Description
Our application is emphasized toward art enthusiasts to study graffiti and its development over time. Users will be able to upload images of graffiti they come across, and we will pull metadata from these to place their location on a map. There is crowdsourced graffiti tracking to ensure users can easily see the evolution of changes over time.

### Contributors - ThrowUp Team 
- [Kyle Wandishin](https://github.com/kylewandishin)
- [Callianna Priebe](https://github.com/bloodypinecone)
- [Matthew Dean](https://github.com/mattdean-cu)
- [Andrew Santos](https://github.com/ansa1139)
- [Juan Cedeno](https://github.com/Guan234)

### Tech Stack
- NodeJS v20.0.0+
- ExpressJS 4.21.2
- JavaScript
- Tailwind CSS
- Webpack
- PostgreSQL
- Docker

### Prerequisites to run the application - Any software that needs to be installed to run the application
#### All machines
- Nodejs v20.0.0+
- Docker Desktop 
- Docker CLI v27.4.0+
- use `npm i` to install dependencies

#### Windows Machines only
- WSL

### Instructions on how to run the application locally.
```bash
git clone https://github.com/kylewandishin/CSCI3380-group-final GraffTrak
```
```bash
npm install
```
#### for development
```bash
docker compose up -d
```
#### for production
```bash
npm run deploy
```

### How to run the tests
```bash
npm run test
```

### Link to the deployed application
[demo [UNDEPLOYED]](`https://example.com`)


### Contribution Notes
if your having issues with husky not letting you commit
```bash
git commit -m "..." --no-verify
```