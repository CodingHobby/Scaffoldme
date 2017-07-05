const express = require('express'),
	router = express.Router()

app.get('/', function(req, res) {
	res.render('home')
})

module.exports = router