const express = require("express");
const cors = require("cors");
//import databse 
const dbConfig = require("./app/config/dbconfig")
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/survey.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//This Will Open The Mongoose Connection To MongoDB Database

//This will Retrieve User Roles And User Schema
const db = require("./app/models");
const Role = db.role; // Assigns Roles In  To Role

// Connect To MongoDb
db.mongoose
.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  //On Initial Connection User Roles Will Be Added To MongoDB
  function initial() { //The initial() Function Will Helps US To Create Three Important Rows In Roles Collection.
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        // This Will Add The User Role
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
        
        // This Will Add The Moderator Role
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
        
        // This Will Add The Admin Role
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }