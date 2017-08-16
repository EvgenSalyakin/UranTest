var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var PostSchema = new mongoose.Schema( {
    title: { type: String, default: "No title" },
    description: { type: String, default: "No description" },
    content: { type: String, default: "No content" }
} );

var Posts = db.model("post",PostSchema);

router.get('/', function(req, res, next) {
    Posts.count({},function(err,count) {
        if (count) {
            Posts.find(function (err, posts) {
                res.render('index', { title: res.__('LandingPage') , posts});
            });
        } else {
            res.render('index', { title: res.__('LandingPage'), posts: {} });
        }
    } );

});

module.exports = router;


