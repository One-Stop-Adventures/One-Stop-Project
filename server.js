require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require ('massive');
const masterRoutes = require('./server/masterRoutes');
const session = require('express-session');
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

app.use(session({secret: 'me too thanks'}))
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', express.static(__dirname + '/build'))
// massive(process.env.DATABASE_URL).then(dbInstance=>{
//   app.set('db', dbInstance)
// });
// masterRoutes(app);

//landing.js is where connect to frontend
passport.use(new FacebookStrategy({
  clientID: '290049698129601',
  clientSecret: '0dfc228b9cee2e7ef8e312231e5a721a',
  callbackURL: 'http://localhost:4000/auth/facebook/callback' //4000 is server
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

// passport.use(new GoogleStrategy({
//     clientID: "79316663432-tp4mvccldneduge8n1iell2n0bfgtc6p.apps.googleusercontent.com",
//     clientSecret: "m10LeIqjmd_oz9B6uvG87ChA",
//     callbackURL: "http://localhost:4000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//          return done(err, user);
//       })
//   }
// ));

app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "http://localhost:4001/", //changed to 4001 to hit yarn frontend, 4000 is server
  failureRedirect: "/auth/facebook"
}));

//app.get("/auth/google", passport.authenticate("google"));
// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
// app.get("/auth/google/callback", passport.authenticate("google", {
//   successRedirect: "http://localhost:4001/",
//   failureRedirect: "/auth/google"
// }));
// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: 'http://localhost:4001/auth/google' }),
//   function(req, res) {
//     res.redirect('http://localhost:4001/');
//   });

passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.listen(process.env.PORT, function(){
  console.log('Jet fuel cant melt steel beams')
})
