// This Controller Will Be Used For User Authentication

const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;


// Generate A Token Using Jsonwebtoken
var jwt = require("jsonwebtoken");

// Compare Password With Password In Database Using Bcrypt
var bcrypt = require("bcryptjs");

// 
exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    // This Will Hash / Encrypt The Password Input
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    // This Will Be Used To Assign A Specific Role To The User
    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
      //If A Role Is Not Assigned A Default User Role Will Be Assigned
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

//
exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      // If Username Doesn't Exist In Database
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      // If The Password Doesn't Match With Username
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Wrong Login Username Or Password!"
        });
      }
      
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      // After Login This Will Display The Role the User Is Logged In As
      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("hello Boss I'm here" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token
      });
    });
};