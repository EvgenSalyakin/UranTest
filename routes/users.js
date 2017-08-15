var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

//mongoose.model('users',{name: String});

var UserSchema = new mongoose.Schema( {
    name: { type: String, default: "No name" }
} );

var Users = db.model("user",UserSchema);

// var newUser = new User({ name: "Test"});
// newUser.save(function (err, newUser) {
//     if (err){
//         console.log("Something goes wrong with user " + newUser.name);
//     }else{
//         console.log("User " + newUser.name+" added!");
//     }
// });

/* GET users listing. */
router.get('/', function(req, res, next) {

  //var count =  Users.find().count();

    Users.count({},function(err,count) {
        if (count) {
            Users.find(function (err, users) {
                res.send(users);
            });
            } else {
                res.send('No users.');
            }
      //console.log(count);
    } );
  //if (count) {
  //     Users.find(function (err, users) {
  //         res.send(users);
  //     });
  // } else {
  //     res.send('No users.');
  // }
  //res.send('respond Users* with a resource');
});

module.exports = router;
