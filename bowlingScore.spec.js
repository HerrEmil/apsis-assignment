const assert = require('assert');
const sinon = require('sinon');
const bowlingScore = require('./bowlingScore');

describe('A perfect Game', function() {
	it('should get a score of 300', function() {
		let request, response, spy;
		request = response = {};

		request.body = {
			frames: [{
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
			}]
		};

		response.send = sinon.spy();

		bowlingScore.calculateTotal(request, response);

		assert.equal(response.send.args[0][0].score, 300);
	});
});


describe('A game with no pins knocked down', function() {
	it('should get a score of 300', function() {
		let request, response, spy;
		request = response = {};

		request.body = {
			frames: [{
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
			}]
		};

		response.send = sinon.spy();

		bowlingScore.calculateTotal(request, response);

		assert.equal(response.send.args[0][0].score, 0);
	});
});


describe('An open frame', function() {
	it('should have a score of the total pins knocked down', function() {
		let request, response, spy;
		request = response = {};

		request.body = {
			frames: [{
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
			}]
		};

		response.send = sinon.spy();

		bowlingScore.calculateTotal(request, response);

		assert.equal(response.send.args[0][0].score, 8);
	});
});


describe('A strike', function() {
	it('should be worth 10 + the number of pins knowcked down in the two following rolls', function() {
		let request, response, spy;
		request = response = {};

		request.body = {
			frames: [{
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
			}]
		};

		response.send = sinon.spy();

		bowlingScore.calculateTotal(request, response);

		assert.equal(response.send.args[0][0].score, 14); // 12 + 2
	});
});


describe('A spare', function() {
	it('should be worth 10 + the number of pins knowcked down in the following roll', function() {
		let request, response, spy;
		request = response = {};

		request.body = {
			frames: [{
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
			}]
		};

		response.send = sinon.spy();

		bowlingScore.calculateTotal(request, response);

		assert.equal(response.send.args[0][0].score, 13); // 11 + 2
	});
});
