# FinTeach

### Important Links
* [Document Managment (Google Drive)](https://drive.google.com/drive/folders/1MX6GvDaOx8iKt8B_y9BNCwgREOueKDhJ)
* [Task Tracking (Trello)](https://trello.com/b/Z98RNXFW/finteach)

## Getting Started

Before running the application, make sure [postgres](https://www.postgresql.org/download/) and [node](https://nodejs.org/en/) are installed on your machine. Once postgres and node are installed, pull the latest code and navigate to the project directory .


## Frontend

Navigate to the FinTeach/FinTeach folder within the base directory. Run the following commands
`npm install -g @angular/cli`
`npm install`
`npm start`
Upon succesfully running each of these three commands, the frontend on its own will be up and running.
It can be viewed by opening your browser and navigating to [here](http://localhost:4200/)


## Express Server

Navigate to the FinTeach/nodejs-express-sequelize-postgresql directory 
Based on the instructions and your postgres configuration, update the db config file
To do this, navigate to FinTeach/nodejs-express-sequelize-postgresql/app/config and open db.config.js
Update the user, password, and db fields
These are established during first time postgres setup as well as by following the database instructions above
Once these values are updated, you can run the Express server. Run the following commands
`npm install express sequelize pg pg-hstore cors --save`
`npm install`
`node server.js`
Upon successfully running these commands, the express server will be up and running.
It can be viewed by opening your browser and navigating to [here](http://localhost:8080/)


## Project Structure

The FinTeach/FinTeach directory contains the components for the frontend of the application while the nodejs-express-sequelize-postgresql directory contains the backend.
