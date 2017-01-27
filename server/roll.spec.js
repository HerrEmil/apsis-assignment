const assert = require('assert');
const Roll = require('./roll');

describe('Roll class', function() {

	describe('isValid()', function() {

		it('should accept all numbers 0-10', function() {
			const roll0 = new Roll('0');
			const roll1 = new Roll(1);
			const roll2 = new Roll('2');
			const roll3 = new Roll(3);
			const roll4 = new Roll('4');
			const roll5 = new Roll(5);
			const roll6 = new Roll('6');
			const roll7 = new Roll(7);
			const roll8 = new Roll('8');
			const roll9 = new Roll(9);
			const roll10 = new Roll('10');

			assert.equal(roll0.isValid(), true);
			assert.equal(roll1.isValid(), true);
			assert.equal(roll2.isValid(), true);
			assert.equal(roll3.isValid(), true);
			assert.equal(roll4.isValid(), true);
			assert.equal(roll5.isValid(), true);
			assert.equal(roll6.isValid(), true);
			assert.equal(roll7.isValid(), true);
			assert.equal(roll8.isValid(), true);
			assert.equal(roll9.isValid(), true);
			assert.equal(roll10.isValid(), true);
		});

		it('should not accept too small numbers', function() {
			const roll1 = new Roll(-1);
			const roll2 = new Roll(-10000);

			assert.equal(roll1.isValid(), false);
			assert.equal(roll2.isValid(), false);
		});

		it('should not accept too large numbers', function() {
			const roll1 = new Roll(11);
			const roll2 = new Roll(10000);

			assert.equal(roll1.isValid(), false);
			assert.equal(roll2.isValid(), false);
		});

		it('should not accept missing numbers', function() {
			const roll = new Roll();

			assert.equal(roll.isValid(), false);
		});

		it('should not accept non-number input', function() {
			const roll1 = new Roll('test');
			const roll2 = new Roll(true);
			const roll3 = new Roll(false);
			const roll4 = new Roll(undefined);
			const roll5 = new Roll({1:1});
			const roll6 = new Roll(NaN);

			assert.equal(roll1.isValid(), false);
			assert.equal(roll2.isValid(), false);
			assert.equal(roll3.isValid(), false);
			assert.equal(roll4.isValid(), false);
			assert.equal(roll5.isValid(), false);
			assert.equal(roll6.isValid(), false);
		});

	});

	describe('getScore()', function() {

		it('should return any valid score 0-10', function() {
			const roll0 = new Roll('0');
			const roll1 = new Roll(1);
			const roll2 = new Roll('2');
			const roll3 = new Roll(3);
			const roll4 = new Roll('4');
			const roll5 = new Roll(5);
			const roll6 = new Roll('6');
			const roll7 = new Roll(7);
			const roll8 = new Roll('8');
			const roll9 = new Roll(9);
			const roll10 = new Roll('10');

			assert.equal(roll0.getScore(), 0);
			assert.equal(roll1.getScore(), 1);
			assert.equal(roll2.getScore(), 2);
			assert.equal(roll3.getScore(), 3);
			assert.equal(roll4.getScore(), 4);
			assert.equal(roll5.getScore(), 5);
			assert.equal(roll6.getScore(), 6);
			assert.equal(roll7.getScore(), 7);
			assert.equal(roll8.getScore(), 8);
			assert.equal(roll9.getScore(), 9);
			assert.equal(roll10.getScore(), 10);
		});

		it('should return 0 instead of too small numbers', function() {
			const roll1 = new Roll(-1);
			const roll2 = new Roll(-10000);

			assert.equal(roll1.isValid(), 0);
			assert.equal(roll2.isValid(), 0);
		});

		it('should return 0 instead of too large numbers', function() {
			const roll1 = new Roll(11);
			const roll2 = new Roll(10000);

			assert.equal(roll1.getScore(), 0);
			assert.equal(roll2.getScore(), 0);
		});

		it('should return 0 instead of missing numbers', function() {
			const roll = new Roll();

			assert.equal(roll.getScore(), 0);
		});

		it('should return 0 instead of non-number input', function() {
			const roll1 = new Roll('test');
			const roll2 = new Roll(true);
			const roll3 = new Roll(false);
			const roll4 = new Roll(undefined);
			const roll5 = new Roll({1:1});
			const roll6 = new Roll(NaN);

			assert.equal(roll1.getScore(), 0);
			assert.equal(roll2.getScore(), 0);
			assert.equal(roll3.getScore(), 0);
			assert.equal(roll4.getScore(), 0);
			assert.equal(roll5.getScore(), 0);
			assert.equal(roll6.getScore(), 0);
		});
	});
});
