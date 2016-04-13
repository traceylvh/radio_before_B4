var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/", function(req,res,next){
    res.json(req.isAuthenticated());
});

router.get("/name", function(req,res,next){
    console.log("Hey you! ", req.isAuthenticated());
    var resUser = {
        username: req.user.username,
        // firstname: req.user.firstname,
        // lastname: req.user.lastname,
        // datecreated: req.user.lastlogin
    };
    res.json(resUser);
});


//TODO is this where logout will go? router.get...
// app.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });


module.exports = router;
