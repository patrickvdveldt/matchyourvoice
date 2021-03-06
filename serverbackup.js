console.log('server is starting!!');

var express = require('express');
var app = express();
var bodyParser = require('body-parser').urlencoded({extended: true});
var mysql = require('mysql');
var session = require('express-session');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'matchyourvoice'
})
connection.connect()

function listening() {
  console.log("listening....");
}

module.exports = express()
  .set('view engine', 'ejs')
  .set('views','view')
  .use(bodyParser)
  .use(express.static('website'))
  .use('/image', express.static('db/image'))
  .use(session({
    secret: 'patrick is stoer', //sleutel encriptie van alle cookies.
    resave: false, //
    saveUninitialized: false, //alleen wanneer de gebruiker inlogt wil je een session.
  }))
  .post('/index', handleLogin)
  .post('/signup', signup)
  //.get('/Login_v2/login', login)
  .get('/loggedprofile.ejs', loggedProfile)
  .get('/', index)
  .get('/berichten.ejs', berichten)
  .get('/chat/:id', chatten)
  .get('/matchprofile/:id', profielMatch)
  .listen(3000, listening)

  function signup(req, res) {
    var body = req.body
    var id
    connection.query('INSERT INTO person SET ?', body, onDone)
    function onDone (err, data) {
      if(err) throw err
      id = data.insertId
      res.redirect('/Login_v2/login.html')
    }
    /*connection.query("SELECT * FROM person WHERE id = ?", id, onSelect)
    function onSelect (err, user) {
      if(err) throw err
      req.session.loggedIn = true
      req.session.user = user
    }*/
  }

  function handleLogin(req, res) {
    var body = Object.assign({}, req.body)
    connection.query('SELECT * FROM person WHERE email = ?', body.email, function (err, users) {
      if(err) throw (err)
      var user = users[0]
      console.log(user,body)
      if (user.wachtwoord === body.wachtwoord) {
        req.session.loggedIn = true
        req.session.user = user
        res.redirect('/loggedprofile.ejs')
    }
      else {
        res.end('ja ga niet werken pik')
      }
    })
  }

  function loggedProfile(req, res) {
    console.log(req.session)
    connection.query('SELECT * FROM person', onDone)

    function onDone(err, data) {
      if (err || data.length === 0) {
        //acount niet gevonden
        console.log('Error: ', err)
        return res.status(404).render('error.ejs', {id: 404, description: 'page not found', map: "../"})

      } else {
        console.log(data)
        res.render('loggedprofile.ejs', {
          title: 'index',
          data: data, user:req.session.user
        })
      }
    }
  }

  function index(req, res) {
    console.log(req.session)
    connection.query('SELECT * FROM person', onDone)

    function onDone(err, data) {
      if (err || data.length === 0) {
        //acount niet gevonden
        console.log('Error: ', err)
        return res.status(404).render('error.ejs', {id: 404, description: 'page not found', map: "../"})

      } else {
        console.log(data)
        res.render('index.ejs', {
          title: 'index',
          data: data, user:req.session.user
        })
      }
    }
  }

function berichten(req, res) {
  connection.query('SELECT * FROM person', onDone)

  function onDone(err, data) {
    if (err || data.length === 0) {
      //acount niet gevonden
      console.log('Error: ', err)
      return res.status(404).render('error.ejs', {id: 404, description: 'page not found', map: "../"})

    } else {
      console.log(data)
      res.render('berichten.ejs', {
        title: 'berichten',
        data: data
      })
    }
  }
  }

function chatten(req, res) {
  connection.query('SELECT * FROM person', onDone)
  function onDone(err, data) {
    if (err || data.length === 0) {
      //acount niet gevonden
      console.log('Error: ', err)
      return res.status(404).render('error.ejs', {id: 404, description: 'page not found', map: "../"})

    } else {
      var id = req.params.id
      console.log(data)
      res.render('chat.ejs', {
        person: req.params.id,
        title: 'chat',
        data:data[id]
      })
    }
  }
}

function profielMatch(req, res) {
  connection.query('SELECT * FROM person', onDone)
  function onDone(err, data) {
    if (err || data.length === 0) {
      //acount niet gevonden
      console.log('Error: ', err)
      return res.status(404).render('error.ejs', {id: 404, description: 'page not found', map: "../"})

    } else {
      var id = req.params.id
      console.log(data)
      res.render('matchprofile.ejs', {
        person: req.params.id,
        title: 'matchprofile',
        data:data[id]
      })
    }
  }
}

/*var data = [
  {
  id: "0",
  naam: 'Anne',
  leeftijd: '26',
  berichtgeving: 'Wat ben je aan het doen?'},

  {
  id: "1",
  naam: 'Kim',
  leeftijd: '22',
  berichtgeving: 'Ja prima hoor, met jou?'},

  {
  id: "2",
  naam: 'Aniek',
  leeftijd: '21',
  berichtgeving: 'Hoe is jouw dag tot dusver?'},

  {
  id: "3",
  naam: 'Rosanne',
  leeftijd: '24',
  berichtgeving: 'Haha, lol!'},

  {
  id: "4",
  naam: 'Mendie',
  leeftijd: '21',
  berichtgeving: 'Daar ben ik gek op!'},

  {
  id: "5",
  naam: 'Annelinde',
  leeftijd: '22',
  berichtgeving: 'Ik ga stuk!'},

  {
  id: "6",
  naam: 'Anne',
  leeftijd: '21',
  berichtgeving: 'Hi Patrick'},

  {
  id: "7",
  naam: 'Kim',
  leeftijd: '22',
  berichtgeving: 'Ik kom uit Badhoevedorp'},

  {
  id: "8",
  naam: 'Esmee',
  leeftijd: '23',
  berichtgeving: 'Haha, wat nice!'},

  {
  id: "9",
  naam: 'Marjolein',
  leeftijd: '22',
  berichtgeving: 'Haha, wanneer dan wel?'},

]*/
