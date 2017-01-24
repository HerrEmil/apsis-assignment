var express = require('express');
var path = require('path');

var app = express();

// Serve static Angular resources from /public
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for getting bowling score goes here
app.post('/calculate-bowling-score', function (req, res) {
	console.log(req);
  res.send('Got a POST request')
})

// Listen for requests
app.listen(3000);
console.log('Serving at http://localhost:' + 3000 + '/');
