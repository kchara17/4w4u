const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()
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
app.get('/place/:id', (req, res) => {
  store
    .getPlace({
		id: req.params.id
	})
	.then(({success,rows}) => {
	if (success) res.json(rows)
      else res.sendStatus(401)
	})
})
app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})