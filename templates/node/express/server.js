const express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	exphbs = require('express-handlebars'),
	port = process.env.PORT || [PORT]
	app = express()

const routes = require('./routes/')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public/')))
app.use(bodyParser.json())
app.use('/', routes)

app.listen(port, function() {
	console.log("App listening on http://127.0.0.1:" + port)
})