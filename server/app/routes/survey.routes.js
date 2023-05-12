// const surveyController = require("./survey.controller");
const router = require("express").Router();

const surveyController =require("../controllers/survey.controller");

//CRUD
router.post("/api/survey", surveyController.create).get("/", surveyController.findAll);

module.exports = router;