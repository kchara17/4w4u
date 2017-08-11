const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()
var server = app.listen(7555);

/*server.listen(7555);

server.on('connection', function(socket) {
  console.log("A new connection was made by a client.");
  socket.setTimeout(30 * 1000); 
  // 30 second timeout. Change this as you see fit.
})*/

app.use(express.static('public'))
app.use(bodyParser.json())
/*app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.query.username,
      password: req.query.password
    })
    .then(() => res.sendStatus(200))
})
app.post('/login', (req, res) => {
  store
    .authenticate({
      username: req.query.username,
      password: req.query.password
    })
    .then(({ success }) => {
      if (success) res.sendStatus(200)
      else res.sendStatus(401)
    })
})*/
app.get('/place/id/:id', (req, res) => {
	setTimeout(() => {
    res.send('done');
  }, 180000)
  store
    .getPlaceById({
		id: req.params.id
	})
	.then(function(rows) {
		res.status(200).json(rows)
	})
	.catch(function(error) {
		next(error)
	})
})

app.get('/place/name/:name', (req, res) => {
	setTimeout(() => {
    res.send('done');
  }, 180000)
  store
    .getPlaceByName({
		name: req.params.name
	})
	.then(function(rows) {
		res.status(200).json(rows)
	})
	.catch(function(error) {
		next(error)
	})
})

app.get('/place/address/:address', (req, res) => {
	setTimeout(() => {
    res.send('done');
  }, 180000)
  store
    .getPlaceByAddress({
		address: req.params.address
	})
	.then(function(rows) {
		res.status(200).json(rows)
	})
	.catch(function(error) {
		next(error)
	})
})

app.get('/place/closest', (req, res) => {
	setTimeout(() => {
    res.send('done');
  }, 180000)
  console.log(req.query.lat + ',' + req.query.lng +',' + req.query.amount)
  store
    .getClosestPlaces({
		lng: req.query.lat,
		lat: req.query.lng,
		amount: req.query.amount
	})
	.then(function(rows) {
		res.status(200).json(rows)
	})
	.catch(function(error) {
		next(error)
	})
})

app.get('/place', (req, res) => {
  res.send("HEY!")
})
server.timeout = 240000;  
/*app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})*/