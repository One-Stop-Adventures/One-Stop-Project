require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require ('massive');
const masterRoutes = require('./server/masterRoutes');
const session = require('express-session');
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const LocalStrategy = require('passport-local').Strategy;
const logout = require ('express-passport-logout')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', express.static(__dirname + '/build'))

app.use( session({ secret: 'superSecret' }))
let db;
massive(process.env.DATABASE_URL).then(dbInstance=>{
  app.set('db', dbInstance)
  db = dbInstance
});

masterRoutes(app);

// Passport Local Login
app.use(passport.initialize())
app.use(passport.session())

app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { 
      return res.send(info); 
    }
    req.logIn(user, function(err) {
      if (err) { return res.send("Error") }
      return res.send(req.user)
    });
  })(req, res, next);
});

passport.use( new LocalStrategy(
  function ( username, password, done ){
    db.find_user([username])
    .then(users => {
      if ( !users.length ) {
        return done( null, false, { message: 'Incorrect Username' });
      }
      if ( users[0].password !== password) {
        return done( null, false, { message: 'Incorrect Password' });
      }
      const user = users[0]
      delete user.password
      return done( null, user )
    })
    .catch(err => {
      console.log("SQL ERROR:", err)
      return done(err)
    })
  }
));

passport.serializeUser(function(user, done) {
	console.log('this is the serialized user: ', user);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
	console.log('this is the deserialized user: ', obj);
  done(null, obj);
});

//Passport Log Out
app.get('/logout', function(req, res){
  
  req.logout();
  console.log('Logged Out')
  res.redirect('/');

});


//landing.js is where connect to frontend
passport.use(new FacebookStrategy({
  clientID: '290049698129601',
  clientSecret: '0dfc228b9cee2e7ef8e312231e5a721a',
  callbackURL: 'http://localhost:4000/auth/facebook/callback' //4000 is server
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.use(new GoogleStrategy({
    clientID: "79316663432-tp4mvccldneduge8n1iell2n0bfgtc6p.apps.googleusercontent.com",
    clientSecret: "m10LeIqjmd_oz9B6uvG87ChA",
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
      })
  }
));

app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "http://localhost:4001/", //changed to 4001 to hit yarn frontend, 4000 is server
  failureRedirect: "/auth/facebook"
}));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:4001/auth/google' }),
  function(req, res) {
    res.redirect('http://localhost:4001/');
  });


app.listen(process.env.PORT, function(){
  console.log('Jet fuel cant melt steel beams')
})
