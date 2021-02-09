 
 //  Express


 // const express = require('express');
 // const app = express();

 // app.get('/ping', (req, res) => {
 //  res.send('Express Applicati')
 // });

 // app.listen(3000, () => {
 //  console.log('Server started on port number: 3000');
 // })

 // //  nodemon server restart the server automatically

 //  Middleware

 // const express = require('express');
 // const app = express();

 // const myLogger = function(req, res, next){
 //  console.log('LOGGED');
 //  next()
 // }

 //  const requestTime = function(req, res, next){
 //  req.reqTime = Date.now()
 //  next()
 // }

 // app.use(myLogger)
 // app.use(requestTime)

 // app.get('/', function(req, res){
 //  res.send(`Current Time: ${req.reqTime}`)
 // })

 // app.listen(3000, () => console.log('App Started on POST 3000'))

 // Serving static files in Express

 // const express = require('express');
 // const path = require('path');

 // const app = express();

 // const publicpath = path.resolve(__dirname, 'public')

 // app.use(publicpath, express.static('static'));

 // <img src = 'public/img_abc.jpg'></img>

 // app.get('/', function(req, res){
 //  res.send(`Static Files`);
 // })

 // app.listen(3000, () => console.log("App Started on PORT 3000"))

 //  Routing with Express

 // const express = require('express');
 // const app = express();

 // const PORT = 3000;

 // const data = {
 //  id : 1,
 //  name : 'India'
 // }

 // app.get('/', (req, res) => {
 //  res.end('Welcome to my HomePage');
 // })

 // app.get('/about', (req, res) => {
 //  res.send('Welcome to my About Page');
 // })

 // app.get('/weather', (req, res) => {
 //  res.json(data)
 // })

 // app.listen(PORT, () => { console.log('Server Started on', PORT)})

 //  Views

 // const express = require('express');
 // const app = express();

 // const PORT = 3000;

 // app.set('view engine', 'pug')

 // app.get('/', function(req, res) {
 //  res.render('index', { title : "Express View Engine", h1 : "Express Application", p : "Express Templet Engine" })
 // }).listen(PORT, () => { console.log('Server Started on http://localhost:3000')});

//*************************** */

 // const express = require('express');
 // const path = require('path');
 // const app = express()

 // const PORT = process.env.PORT || 3000

 // app.set('views', path.join(__dirname, 'views'))
 // app.set('view engine', 'pug')

 // app.use(express.urlencoded({
 //  extended : true
 // }))

 // app.get('/', (req, res) => {
 //  res.render('index', {title : 'Form Handling'})
 // })

 // app.post('/form_submit', (req, res) => {
 //  const username = req.body.username
 //  const email = req.body.email 
 //  res.end(`Your Username is: ${username} and Email is: ${email}`)
 // })

 // app.listen(PORT, () => {
 //  console.log(`Listening to request on http://localhost:${PORT}`);
 // })

 /*************************** */

 //  Session

 // const express = require('express');
 // const app = express()
 // const session = require('express-session');

 // const PORT = process.env.PORT || 3000

 // app.use(session({
 //  secret : 'Your Secret Key',
 //  resave : true,
 //  saveUninitialized : true
 // }))

 // app.get('/', (req, res) => {
 //  req.session.name = 'John';
 //  return res.send('Session Set')
 // })

 // app.get('/session', (req, res) => {
 //  var name = req.session.name;
 //  return res.send(name)
 // })

 // app.get('/destroy', (req, res) => {
 //  req.session.destroy(function (error) {
 //   console.log("Session Destroyed");
 //  })
 //  res.end();
 // })

 // app.listen(PORT, () => {
 //  console.log(`Listening to request on http://localhost:${PORT}`);
 // })
 
 /*************************************** */

 // Cookies

 const express = require('express');
 const app = express()
 const cookies = require('cookies-parser');

 const PORT = process.env.PORT || 3000

 app.use(cookies());

 let users = {
  name : 'john',
  age : 22
 }

 app.get('/', (req, res) => {
  res.send('Cookies')
 })

 app.get('/setuser', (req, res) => {
  res.cookie('userData', users);
  res.send('User Data Added to Cookies')
 })

 app.get('/getuser', (req, res) => {
  res.send(req.cookies);
 })

 app.get('/logout', (req, res) => {
  res.clearCookie('userData');
  res.send('User logout Sucessfully')
 })

 app.listen(PORT, () => {
  console.log(`Listening to request on http://localhost:${PORT}`);
 })