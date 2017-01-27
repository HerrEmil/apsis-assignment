const Game = require('./game');

class Calculator {

	calculateTotal(req, res) {

		const game = new Game(req.body.frames);

		const response = {
			"score": game.calculateTotal()
		};

		res.send(response)
	}
}

module.exports = Calculator;
