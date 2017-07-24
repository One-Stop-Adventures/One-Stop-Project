require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require ('massive');
const masterRoutes = require('./server/masterRoutes');
const session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', express.static(__dirname + '/build'))
// massive(process.env.DATABASE_URL).then(dbInstance=>{
//   app.set('db', dbInstance)
// });
// masterRoutes(app);

app.listen(process.env.PORT, function(){
  console.log('Jet fuel cant melt steel beams')
})
