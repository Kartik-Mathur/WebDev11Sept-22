const passport = require('passport');
const LocalStrategy = require('passport-local');
const FacebookStrategy = require('passport-facebook');
const User = require('./database/user');

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne(
            { username: username },
            function (err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                return done(null, user);
            });
    }
));

passport.use(new FacebookStrategy({
    clientID: '593651345928960',
    clientSecret: '5065c53013365472246b950f790808ab',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      console.log(accessToken);
      console.log(refreshToken);
    User.find({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

module.exports = passport;