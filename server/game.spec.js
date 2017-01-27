const assert = require('assert');
const Game = require('./game');

describe('Game class', function() {

	describe('calculateTotal()', function() {
		it('should give a perfect game a score of 300', function() {
			const game = new Game([{
				first: '10',
				second: ''
			}, {
				first: '10',
				second: ''
			}, {
				first: '10',
				second: ''
			}, {
				first: '10',
				second: ''
			}, {
				first: '10',
				second: ''
			}, {
				first: '10',
				second: ''
			}, {
				first: '10',
				second: ''
			}, {
				first: '10',
				second: ''
			}, {
				first: '10',
				second: ''
			}, {
				first: '10',
				second: '10',
				bonus: '10'
			}]);

			assert.equal(game.calculateTotal(), 300);

		});

		it('should give a game with pins knocked down a score of 0', function() {
			const game = new Game([{
				first: '0',
				second: '0'
			}, {
				first: '0',
				second: '0'
			}, {
				first: '0',
				second: '0'
			}, {
				first: '0',
				second: '0'
			}, {
				first: '0',
				second: '0'
			}, {
				first: '0',
				second: '0'
			}, {
				first: '0',
				second: '0'
			}, {
				first: '0',
				second: '0'
			}, {
				first: '0',
				second: '0'
			}, {
				first: '0',
				second: '0',
				bonus: ''
			}]);

			assert.equal(game.calculateTotal(), 0);

		});

		it('should give a an open frame a score of the sum of the knocked down pins', function() {
			const game = new Game([{
				first: '3',
				second: '5'
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: '',
				bonus: ''
			}]);

			assert.equal(game.calculateTotal(), 8);
		});

		it('should give a strike a score of 10 + the number of pins knocked down in the two following rolls', function() {
			const game1 = new Game([{
				first: '10',
				second: ''
			}, {
				first: '1',
				second: '1'
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: '',
				bonus: ''
			}]);

			assert.equal(game1.calculateTotal(), 14);
		});

		it('should give a spare a score of 10 + the number of pins knocked down in the following roll', function() {
			const game = new Game([{
				first: '5',
				second: '5'
			}, {
				first: '1',
				second: '1'
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: ''
			}, {
				first: '',
				second: '',
				bonus: ''
			}]);

			assert.equal(game.calculateTotal(), 13);
		});
	});
});
