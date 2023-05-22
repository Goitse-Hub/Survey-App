const mongoose = require("mongoose");

const SurveyTemplateSchema = mongoose.Schema(
  {
    title: String,
    questions: String
  },
  {
    timestamps: true,
    strict: false,
  }
);

// const Questions = mongoose.Schema(
//     {
//       title: String,
//       type: Array
//     },
//     {
//       timestamps: true,
//       strict: false,
//     }
//   );

module.exports = mongoose.model("SurveyTemplate", SurveyTemplateSchema);