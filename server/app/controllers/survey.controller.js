// const Survey = require("./survey.model");

const Survey = require("../models/survey.model");

// Create and Save a new Survey
exports.create = (req, res) => {
  const surveyData = req.body;

  // Create a Post
  const survey = new Survey(surveyData);

  // Save Post in the database
  survey
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the survey.",
      });
    });
};

// Find all surveys
exports.findAll = (req, res) => {
  Survey.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};