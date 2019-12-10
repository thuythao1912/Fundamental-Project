//authentication
var passport = require("passport");
var passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {};
var jwt = require("jsonwebtoken");

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";

var adminModel = require("../models/admin-model");

// lets create our strategy for web token
var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log("payload received", jwt_payload);
  var admin = adminModel.findOne({ username: jwt_payload.username });
  if (admin) {
    next(null, admin);
  } else {
    next(null, false);
  }
});

// lets create our strategy SESSION
let localStrategy = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password"
    // passReqToCallback: true
  },
  function(username, password, done) {
    username = username;
    adminModel
      .findOne({
        username: username,
        password: password
      })
      .then(admin => {
        console.log(admin);
        if (!admin) {
          console.log("Admin Not found");
          return done(null, false, { message: "Tài khoản không tồn tại" });
        }
        return done(null, admin);
      })
      .catch(err => {
        if (err) {
          return done(err);
        }
      });
  }
);

passport.serializeUser(function(admin, done) {
  done(null, admin.username);
});

// use the strategy
passport.use(strategy);
passport.use(localStrategy);

module.exports.getPassport = () => {
  return passport;
};
module.exports.getSecretOrKey = () => {
  return jwtOptions.secretOrKey;
};
