require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require ('massive');
const masterRoutes = require('./server/masterRoutes');
const session = require('express-session');
const passport = require('passport');
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
    db.findOne([username])
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


app.listen(process.env.PORT, function(){
  console.log('Jet fuel cant melt steel beams')
})
