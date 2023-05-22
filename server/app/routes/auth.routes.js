const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);


  app.put("/api/auth/:id", controller.update);

  app.patch("/api/auth/:id", controller.update);

  app.delete("/api/auth/all", controller.deleteAll);

    // Delete a Survey with id
  app.delete("/api/auth/:id", controller.delete);

  app.get("/api/auth/all", controller.findAll);
};