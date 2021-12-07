# FinTeach

### Important Links
* [Document Managment (Google Drive)](https://drive.google.com/drive/folders/1MX6GvDaOx8iKt8B_y9BNCwgREOueKDhJ)
* [Task Tracking (Trello)](https://trello.com/b/Z98RNXFW/finteach)

## Getting Started

Before running the application, make sure [postgres](https://www.postgresql.org/download/) and [node](https://nodejs.org/en/) are installed on your machine. Once postgres and node are installed, pull the latest code and navigate to the project directory . <br />
Postgres: https://www.postgresql.org/download/ <br />
Node: https://nodejs.org/en/download/  <br />


## Backend 
Ensure PostgreSQL and PGAdmin are installed using the link above
Navigate to the database folder in the base directory and get the two sql files there for use below <br />
Create a new database called finteach_db and set postgres as the user. <br />
Open a new query and run the contents of finteach_db_1_create_schema.sql. <br />
Open a new query and run the contents of finteach_db_2_populate_table.sql. <br />
## Frontend

Navigate to the FinTeach/FinTeach folder within the base directory. Run the following commands <br />
`npm install -g @angular/cli` <br />
`npm install` <br />
`npm start` <br />
Upon succesfully running each of these three commands, the frontend on its own will be up and running. <br />
It can be viewed by opening your browser and navigating to [http://localhost:4200/](http://localhost:4200/) <br />


## Express Server

Navigate to the FinTeach/nodejs-express-sequelize-postgresql directory <br />
Based on the instructions and your postgres configuration, update the db config file <br />
To do this, navigate to FinTeach/nodejs-express-sequelize-postgresql/app/config and open db.config.js <br />
Update the user, password, and db fields <br />
These are established during first time postgres setup as well as by following the database instructions above <br />
Once these values are updated, you can run the Express server. Run the following commands <br />
`npm install express sequelize pg pg-hstore cors --save` <br />
`npm install` <br />
`node server.js` <br />
Upon successfully running these commands, the express server will be up and running. <br />
It can be viewed by opening your browser and navigating to [http://localhost:8080/](http://localhost:8080/) <br />


## Project Structure

The FinTeach/FinTeach directory contains the components for the frontend of the application. The nodejs-express-sequelize-postgresql directory contains the backend. The database folder contains the database sql scripts.
