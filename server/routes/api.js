const express = require("express");
const router = express.Router();
mongoose = require("mongoose");
mongoose.Promise = Promise;
// Require user & privilege models
const User = require("../models/user");
const FullUser = require("../models/full-user");
const Privilege = require("../models/privilege");

// add new user to DB
// router.post("/new", (req, res) => {
//   const newUser = new User(req.body)  // need to parse it!!!! 
//   newUser.save()
//     .then( result => {
//       console.log(result);
//       res.send(result);
//     })
// });

router.post("/user", (req, res) => {
  console.log("got user POST api request ", req.body);
  let newUser = false;
  if(!req.body._id) {
    newUser = true;
    req.body._id = new mongoose.mongo.ObjectID();
  }
  const {privileges, ...userData} = req.body
  const query = {_id: req.body._id};
  
  User.findOneAndUpdate(query, userData, { upsert: true }, function( err, result ) {
    console.log("result:", result);
    res.send(result);
  });
  Privilege.find({value: {$in: privileges}}, function (err, docs) {
    console.log("privileges ",docs);
    FullUser.findOneAndUpdate(query, userData, { upsert: true }, function( err, result ) {
      console.log("result:", result);
      res.send(result);
    });
   })
});

router.get("/create-tables", async (req, res) => {
  mongoose.connection.collections["fullusers"].drop( function(err) {
    err
    ? console.log("collection fullusers not dropped ", err)
    : console.log("collection fullusers dropped");
  });
  mongoose.connection.collections["users"].drop( function(err) {
      err
        ? console.log("collection users not dropped", err)
        : console.log("collection users dropped");
    
  });
  const users = [
    ["Admin", "SysAdmin", [7]],
    ["Viewer1", "Read only", [1, 2, 4]],
    ["Viewer2", "Read only", [1, 2, 4]],
    ["Viewer3", "", [1, 2, 4]],
    ["RolesHandler", "Limited to roles", [4, 5]],
    ["DataObserver", "", [1]],
    ["SuperUser", "", [2, 3]]
  ];
  users.map( async userArray => {
    newUser = new User({
      username: userArray[0],
      description: userArray[1]
    });
    const savePromise = await newUser.save()
    console.log("savePromise", savePromise);
    const fullUser = new FullUser({
      user: savePromise._id,
      privileges: userArray[2]
    });
    console.log("fullUser", fullUser);
    return fullUser.save();
  });
  res.send("done");
});
// get specific user by id
// router.get("/user/:id", (req, res) => {
//   console.log("got users GET api request ");
//     // get specific user
//     User.findOne({ _id: req.params.id })
//       .populate("privileges") // one to many using ref from privileges collection(table)
//       .populate("users") // one to many using ref from users collection(table)
//       .exec((err, result) => {
//         res.json(handleDbResponse(err, result));
//       });
// });
router.get("/users", (req, res) => {
  console.log("got full users GET api request ");
  // get all users
  FullUser.find()
    .populate("privileges") // one to many using ref from privileges collection(table)
    .populate("user") // one to many using ref from users collection(table)
    .exec((err, result) => {
      if (!err) {
        console.log(result);
        result = result.map(doc => {
          return {
            _id: doc.user._id,
            username: doc.user.username,
            description: doc.user.description,
            privileges: doc.privileges.map(item => item.value)
          };
        });
      } 
      res.json(handleDbResponse(err, result));
    });
})

router.get("/users", (req, res) => {
  console.log("got users GET api request ");
  // get all users
  User.find().exec((err, result) => {
    console.log(result);
    res.json(handleDbResponse(err, result));
  });
});
router.get("/privileges", (req, res) => {
  console.log("got users GET api request ");
  // get all users
  Privilege.find().exec((err, result) => {
    console.log(result);
    res.json(handleDbResponse(err, result));
  });
});

module.exports = router;
/** return query result / error as an Object*/
const handleDbResponse = (err, result) => {
  if (err) {
    return {msg: "error", details: err};
  } else {
    return {msg: "success!", details: result}
  }
}
