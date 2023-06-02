const mongoose = require("mongoose");

const SurveySchema = mongoose.Schema(
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

module.exports = mongoose.model("Survey", SurveySchema);