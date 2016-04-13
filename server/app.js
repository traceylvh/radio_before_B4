var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var passport = require("passport");
var session = require("express-session");
var localStrategy = require("passport-local");

var mongoose = require("mongoose");

//MODELS
var User = require("./models/user");

//ROUTES
var index = require("./routes/index");
var register = require("./routes/register");
var user = require("./routes/user");
var userInfo = require("./routes/userInfo");
var favorites = require("./routes/favorites");



app.use(session({
    secret: "secret",
    key: "user",
    resave: true,
    //is this where saveUninitialized goes?
    // s: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000, secure: false}
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

//MONGO SETUP
var mongoURI = "mongodb://localhost/radio_before";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error", function(err){
    console.log("Mongo Connection Error: ", err);
});

MongoDB.once("open", function(err){
    console.log("Mongo Connection Open");
});

//PASSPORT SESSION
passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err) done(err);
        done(null, user);
    });
});

passport.use("local", new localStrategy({
      passReqToCallback : true,
      usernameField: 'username'
    }, function(req, username, password, done){
        User.findOne({username: username}, function(err,user){
            if(err) throw err;
            if(!user){
              return done(null, false, {message: "Incorrect username or password"});
            }

            user.comparePassword(password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                  return done(null, user);
                } else {
                  done( null, false, {message: "Incorrect username or password"});
                }
            });
        });
    }
));

app.use("/register", register);
app.use("/user", user);
app.use("/userInfo", userInfo);
app.use("/favorites", favorites);
app.use("/", index);

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
