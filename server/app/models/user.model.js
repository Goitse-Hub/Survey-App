
//This Mongoose Model Will Represent The Users Collection In MongoDB Database 
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  
  // The User Object Will Have A Roles Array That Will Contail IDs In The Roles Collection As Reference

  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;