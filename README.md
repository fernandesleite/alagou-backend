# Alagou! Back-end

Node.js backend using ExpressJS, MongoDB, Heroku, providing endpoints used for [Alagou! - Colaborative Android app for monitoring floods.](https://github.com/fernandesleite/alagou-android)

**This app is still under development**


## Run  

    # Run in dev mode
    npm run dev
    
    #Run in prod mode
    npm start
 

## REST API Endpoints

| Route | Methods | Use Cases |
| -------------------------------- | ----------- | --------- |
| /floodings/all | GET | Get all floods |
| /floodings/{id} | GET | Get flood |
| /floodings | POST | Save new floods |
| /floodings | GET | Get all floods using bounds |
| /user | GET | Get all users |
| /user/{id} | GET | Get user |
| /user | POST | Save new user |