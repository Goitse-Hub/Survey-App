
// This Mongoose Model Will Represent The Roles Collection In MongoDB Database.
const mongoose = require("mongoose");

const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Role;