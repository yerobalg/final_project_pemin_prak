# Final Project Pemin Prak

- This API is for the final project in college, it implements dependency injection instead of using direct import to improve scalability and testabilty
- Proper use of error handling

# Pre Requisite
- NodeJS v19

# Instalation
- rename the .env.example file to .env
- Install third party depedencies in this project using ```npm install```
- To make the postgres database, run the docker compose file with
```bash
$ cd env
$ docker compose --env-file ../.env up -d
```
- go back to the main directory, and run this app with ```node index``` or ```nodemon index``` if you use nodemon
