const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const Calculator = require('./server/calculator');

const app = express();

// We are only interested in JSON requests
app.use(bodyparser.json());

// Serve static Angular resources from /public
app.use(express.static(path.join(__dirname, 'public')));

// Bowling score calculator endpoint
app.post('/calculate-bowling-score', function(req, res) {
	const calculator = new Calculator();
	calculator.calculateTotal(req, res);
});

// Listen for requests
app.listen(3000);
console.log('Serving at http://localhost:3000/');
