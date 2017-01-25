function calculateTotal(req, res) {
	console.log('Received request:')
	console.log(req.body);

	let response = {
		"score": -1
	};

	console.log('Sending response:')
	console.log(response)
	res.send(response)
}

module.exports.calculateTotal = calculateTotal;
