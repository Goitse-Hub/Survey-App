// const surveyController = require("./survey.controller");
const surveyController =require("../controllers/survey.controller");

//CRUD
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/api/survey/", 
    surveyController.findAll);
  
    app.post(
      "/api/survey/",
      surveyController.create
    );
  };