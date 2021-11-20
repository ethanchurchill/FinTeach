const express = require("express");
const cors = require("cors");

const app = express();



var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = require("./app/models");
db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Finteach express server." });
});

require("./app/routes/module.routes")(app);
require("./app/routes/submodule.routes")(app);
require("./app/routes/moduleprogress.routes")(app);
require("./app/routes/contentfield.routes")(app);
require("./app/routes/quiz.routes")(app);
require("./app/routes/quizoptions.routes")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
