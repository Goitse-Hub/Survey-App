const { authJwt } = require("../middleware");
const controller = require("../controllers/surveytemplate.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

 
  app.get("/api/surveytemplate/", //[authJwt.verifyToken], 
  controller.findAll);

  app.post(
    "/api/surveytemplate/",
   // [authJwt.verifyToken, authJwt.isAdmin],
    controller.create
  );

  app.get("/api/surveytemplate/:title", controller.findByTitle);
  app.put("/api/surveytemplate/:id", controller.update);

    // Update a Survey with id
    app.patch("/api/surveytemplate/:id", controller.update);

    app.delete("/api/surveytemplate/all", controller.deleteAll);

    // Delete a Survey with id
    app.delete("/api/surveytemplate/:id", controller.delete);

  // Delete all controller
  
};