require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require('massive');
const masterRoutes = require('./server/masterRoutes');
const session = require('express-session');
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const LocalStrategy = require('passport-local').Strategy;
const logout = require('express-passport-logout')

const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', express.static(__dirname + '/build'))

app.use(session({secret: 'superSecret'}))
let db;
massive(process.env.DATABASE_URL).then(dbInstance => {
    app.set('db', dbInstance)
    db = dbInstance
}).catch(err=>console.log(err));

masterRoutes(app);

// Passport Local Login
app.use(passport.initialize())
app.use(passport.session())


app.get('/api/weather/:city/:state', (req,res,next) => {
  axios.get(`http://api.wunderground.com/api/7bd6e5a7f2af93d2/forecast10day/q/${req.params.state}/${req.params.city}.json`)
.then( response => res.send(response.data));
})

app.post('/login', function (req, res, next) {
    passport
        .authenticate('local', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.send(info);
            }
            req
                .logIn(user, function (err) {
                    if (err) {
                        return res.send("Error")
                    }
                    return res.send(req.user)
                });
        })(req, res, next);
});

passport.use(new LocalStrategy(function (username, password, done) {
    db
        .find_user([username])
        .then(users => {
            if (!users.length) {
                return done(null, false, {message: 'Incorrect Username'});
            }
            if (users[0].password !== password) {
                return done(null, false, {message: 'Incorrect Password'});
            }
            const user = users[0]
            delete user.password
            return done(null, user)
        })
        .catch(err => {
            console.log("SQL ERROR:", err)
            return done(err)
        })
}));

passport.serializeUser(function (user, done) {
    console.log('this is the serialized user: ', user);
    done(null, user);

});

passport.deserializeUser(function (obj, done) {
    console.log('this is the deserialized user: ', obj);
    done(null, obj);
});

//Passport Log Out
app.get('/logout', function (req, res) {

    req.logout();
    console.log('Logged Out')
    res.redirect('/');

});

//NPS api call
app.get('/api/tacos/:term', (req, res, next) => {
    axios.get('https://developer.nps.gov/api/v0/parks?limit=519&fields=addresses', {
        headers: {
            Authorization: 'BE3CC0CE-4F5F-45B7-86AD-EE2ACEC43924'
        }
    }).then(response => {
        res.send(response.data);
    })
})

//landing.js is where connect to frontend
passport.use(new FacebookStrategy({
    clientID: '290049698129601', clientSecret: '0dfc228b9cee2e7ef8e312231e5a721a', callbackURL: 'http://localhost:4000/auth/facebook/callback' //4000 is server
}, function (token, refreshToken, profile, done) {
    // You have a profile Either find the guy or make the guy
    db
        .find_by_facebook_id([profile.id])
        .then(users => {
            if (!users.length) {
                db
                    .facebook_id([
                    profile.id, 'http://graph.facebook.com/' + profile.id + '/picture?type=square'
                ])
                    .then((response) => {
                        return done(null, response[0], {newUser: true})
                    })
                    .catch(err => {
                        console.log('sql facebook error', err)
                        return done(err)
                    })
            }
            return done(null, users[0], {newUser: false})
        })
        .catch(err => {
            console.log("SQL ERROR:", err)
            return done(err)
        })
}));

app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("/auth/facebook/callback", function (req, res, next) {
    passport
        .authenticate('facebook', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect('http://localhost:4001/info'); //'http://localhost:4001/profile/' + req.user.id
            }
            req
                .logIn(user, function (err) {
                    if (err) {
                        return res.redirect('http://localhost:4001/error')
                    }
                    if (info.newUser) {
                        return res.redirect('http://localhost:4000/welcome/' + req.user.id)
                    }
                    return res.redirect('http://localhost:4001/profile/' + req.user.id)
            });

        })(req, res, next);
});

passport.use(new GoogleStrategy({
    clientID: "79316663432-tp4mvccldneduge8n1iell2n0bfgtc6p.apps.googleusercontent.com",
    clientSecret: "m10LeIqjmd_oz9B6uvG87ChA",
    callbackURL: "http://localhost:4000/auth/google/callback"
}, function (accessToken, refreshToken, profile, done) {
    db
        .find_by_google_id([profile.id])
        .then(users => {
            if (!users.length) {
                db
                    .google_id([profile.name.givenName, profile.name.familyName, profile.photos[0].value, profile.id])
                    .then((response) => {
                        return done(null, response[0], {newUser: true})
                    })
                    .catch(err => {
                        console.log('sql google error', err)
                        return done(err)
                    })
            }
            return done(null, users[0], {newUser: false})
        })
        .catch(err => {
            console.log("SQL ERROR:", err)
            return done(err)
        })
}));

app.get('/auth/google', passport.authenticate('google', {scope: ['https://www.googleapis.com/auth/plus.login']}));
app.get('/auth/google/callback', function (req, res, next) {
    passport
        .authenticate('google', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect('http://localhost:4001/profile/' + req.user.id);
            }
            req
                .logIn(user, function (err) {
                    if (err) {
                        return res.redirect('http://localhost:4001/error')
                    }
                    if (info.newUser) {
                        return res.redirect('http://localhost:4000/welcome/' + req.user.id)
                    }
                    return res.redirect('http://localhost:4001/profile/' + req.user.id)
                });
        })(req, res, next);
});

app.listen(process.env.PORT, function () {
    console.log('Jet fuel cant melt steel beams')
})

/*
{ id: '1654333687924177',
  username: undefined,
  displayName: 'Chris Yi',
  name:
   { familyName: undefined,
     givenName: undefined,
     middleName: undefined },
  gender: undefined,
  profileUrl: undefined,
  provider: 'facebook',
  _raw: '{"name":"Chris Yi","id":"1654333687924177"}',
  _json: { name: 'Chris Yi', id: '1654333687924177' } }
this is the serialized user:  { id: '1654333687924177',
  username: undefined,
  displayName: 'Chris Yi',
  name:
   { familyName: undefined,
     givenName: undefined,
     middleName: undefined },
  gender: undefined,
  profileUrl: undefined,
  provider: 'facebook',
  _raw: '{"name":"Chris Yi","id":"1654333687924177"}',
  _json: { name: 'Chris Yi', id: '1654333687924177' } }


  Session {
  cookie:
   { path: '/',
     _expires: null,
     originalMaxAge: null,
     httpOnly: true },
  passport:
   { user:
      { id: '1654333687924177',
        displayName: 'Chris Yi',
        name: {},
        provider: 'facebook',
        _raw: '{"name":"Chris Yi","id":"1654333687924177"}',
        _json: [Object] } } }



{ id: '109328388207822931355',
  displayName: 'Vann Vaughan',
  name: { familyName: 'Vaughan', givenName: 'Vann' },
  photos: [ { value: 'https://lh3.googleusercontent.com/-zWm-eMITILs/AAAAAAAAAAI/AAAAAAAAAOg/Ymvd9ur3ZQ0/photo.jpg?sz=50' } ],

        */
