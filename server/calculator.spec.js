const assert = require('assert');
const sinon = require('sinon');
const Calculator = require('./calculator');


describe('Calculator class', function() {
	const calculator = new Calculator();

	describe('calculateTotal()', function() {
		it('should accept requests and send responses with the correct structure', function() {
			let request, response, spy;
			request = response = {};

			request.body = {
				frames: [{
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
					second: ''
				}, {
					first: '',
					second: '',
					bonus: ''
				}]
			};

			response.send = sinon.spy();

			calculator.calculateTotal(request, response);

			const actualResponse = response.send.args[0][0];

			const expectedResponse = {
				score: 0
			};

			assert.equal(JSON.stringify(actualResponse),
				JSON.stringify(expectedResponse));
		});
	});
});
