const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
passport.use(new TwitterStrategy({
    consumerKey: "",
    consumerSecret: "",
    callbackURL: "http://www.localhost:8000/auth/twitter/callback",
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));