// const Survey = require("./survey.model");

const SurveyTemplate = require("../models/surveytemplate.model");

// Create and Save a new Survey
exports.create = (req, res) => {
  const surveyData = req.body;

  // Create a Post
  const survey = new SurveyTemplate(surveyData);

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
  SurveyTemplate.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  SurveyTemplate.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Survey with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Survey with id=" + id });
    });
};

exports.findByTitle = (req, res) => {
  const title = req.params.title;
  SurveyTemplate.find({ title: title })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Surveys."
    });
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  SurveyTemplate.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Survey with id=${id}. Maybe Survey was not found!`
        });
      } else res.send({ message: "Survey was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Survey with id=" + id
      });
    });
};

exports.patch = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  SurveyTemplate.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Survey with id=${id}. Maybe Survey was not found!`
        });
      } else res.send({ message: "Survey was patch successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Survey with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  SurveyTemplate.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Survey with id=${id}. Maybe Survey was not found!`
        });
      } else {
        res.send({
          message: "Survey was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Survey with id=" + id
      });
    });
};

// Delete all Surveys from the database.
exports.deleteAll = (req, res) => {
  SurveyTemplate.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} Surveys were deleted successfully!`
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all Surveys."
    });
  });
};