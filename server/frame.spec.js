const assert = require('assert');
const Frame = require('./frame')

describe('Frame class', function() {
	const mockFrame = {
		first: 0,
		second: 0,
		bonus: 0
	};

	describe('isLastFrame()', function() {

		it('should verify that the last frame is the last', function() {
			const frame = new Frame(mockFrame, 9);

			assert.equal(frame.isLastFrame(), true);
		});

		it('should verify that all frames except the last are not the last', function() {
			const frame1 = new Frame(mockFrame, 0);
			const frame2 = new Frame(mockFrame, 1);
			const frame3 = new Frame(mockFrame, 2);
			const frame4 = new Frame(mockFrame, 3);
			const frame5 = new Frame(mockFrame, 4);
			const frame6 = new Frame(mockFrame, 5);
			const frame7 = new Frame(mockFrame, 6);
			const frame8 = new Frame(mockFrame, 7);
			const frame9 = new Frame(mockFrame, 8);

			assert.equal(frame1.isLastFrame(), false);
			assert.equal(frame2.isLastFrame(), false);
			assert.equal(frame3.isLastFrame(), false);
			assert.equal(frame4.isLastFrame(), false);
			assert.equal(frame5.isLastFrame(), false);
			assert.equal(frame6.isLastFrame(), false);
			assert.equal(frame7.isLastFrame(), false);
			assert.equal(frame8.isLastFrame(), false);
			assert.equal(frame9.isLastFrame(), false);
		});

		it('should not verify any invalid frame number as the last', function() {
			const frame1 = new Frame(mockFrame, -1);
			const frame2 = new Frame(mockFrame, -10000);
			const frame3 = new Frame(mockFrame, 10);
			const frame4 = new Frame(mockFrame, 10000);
			const frame5 = new Frame(mockFrame);
			const frame6 = new Frame(mockFrame, 'test');
			const frame7 = new Frame(mockFrame, true);
			const frame8 = new Frame(mockFrame, false);
			const frame9 = new Frame(mockFrame, undefined);
			const frame10 = new Frame(mockFrame, {
				1: 1
			});
			const frame11 = new Frame(mockFrame, NaN);


			assert.equal(frame1.isLastFrame(), false);
			assert.equal(frame2.isLastFrame(), false);
			assert.equal(frame3.isLastFrame(), false);
			assert.equal(frame4.isLastFrame(), false);
			assert.equal(frame5.isLastFrame(), false);
			assert.equal(frame6.isLastFrame(), false);
			assert.equal(frame7.isLastFrame(), false);
			assert.equal(frame8.isLastFrame(), false);
			assert.equal(frame9.isLastFrame(), false);
			assert.equal(frame10.isLastFrame(), false);
			assert.equal(frame11.isLastFrame(), false);
		});

	});

	describe('isSecondToLast()', function() {

		it('should verify that the second to last frame is the second to last', function() {
			const frame = new Frame(mockFrame, 8);

			assert.equal(frame.isSecondToLast(), true);
		});

		it('should verify that all frames except the second to last are not the second to last', function() {
			const frame1 = new Frame(mockFrame, 0);
			const frame2 = new Frame(mockFrame, 1);
			const frame3 = new Frame(mockFrame, 2);
			const frame4 = new Frame(mockFrame, 3);
			const frame5 = new Frame(mockFrame, 4);
			const frame6 = new Frame(mockFrame, 5);
			const frame7 = new Frame(mockFrame, 6);
			const frame8 = new Frame(mockFrame, 7);
			const frame9 = new Frame(mockFrame, 9);

			assert.equal(frame1.isSecondToLast(), false);
			assert.equal(frame2.isSecondToLast(), false);
			assert.equal(frame3.isSecondToLast(), false);
			assert.equal(frame4.isSecondToLast(), false);
			assert.equal(frame5.isSecondToLast(), false);
			assert.equal(frame6.isSecondToLast(), false);
			assert.equal(frame7.isSecondToLast(), false);
			assert.equal(frame8.isSecondToLast(), false);
			assert.equal(frame9.isSecondToLast(), false);
		});

		it('should not verify any invalid frame number as the second to last', function() {
			const frame1 = new Frame(mockFrame, -1);
			const frame2 = new Frame(mockFrame, -10000);
			const frame3 = new Frame(mockFrame, 10);
			const frame4 = new Frame(mockFrame, 10000);
			const frame5 = new Frame(mockFrame);
			const frame6 = new Frame(mockFrame, 'test');
			const frame7 = new Frame(mockFrame, true);
			const frame8 = new Frame(mockFrame, false);
			const frame9 = new Frame(mockFrame, undefined);
			const frame10 = new Frame(mockFrame, {
				1: 1
			});
			const frame11 = new Frame(mockFrame, NaN);

			assert.equal(frame1.isSecondToLast(), false);
			assert.equal(frame2.isSecondToLast(), false);
			assert.equal(frame3.isSecondToLast(), false);
			assert.equal(frame4.isSecondToLast(), false);
			assert.equal(frame5.isSecondToLast(), false);
			assert.equal(frame6.isSecondToLast(), false);
			assert.equal(frame7.isSecondToLast(), false);
			assert.equal(frame8.isSecondToLast(), false);
			assert.equal(frame9.isSecondToLast(), false);
			assert.equal(frame10.isSecondToLast(), false);
			assert.equal(frame11.isSecondToLast(), false);
		});

	});

	describe('getNextFrame()', function() {

		it('should return the frame number after the current frame', function() {
			const frameNumber1 = 0;
			const frameNumber2 = 1;
			const frame1 = new Frame(mockFrame, frameNumber1);
			const frame2 = new Frame(mockFrame, frameNumber2);

			assert.equal(frame1.getNextFrame(), frameNumber1 + 1);
			assert.equal(frame2.getNextFrame(), frameNumber2 + 1);
		});
	});

	describe('getNextNextFrame()', function() {

		it('should return the frame number after the next frame', function() {
			const frameNumber1 = 0;
			const frameNumber2 = 1;
			const frame1 = new Frame(mockFrame, frameNumber1);
			const frame2 = new Frame(mockFrame, frameNumber2);

			assert.equal(frame1.getNextNextFrame(), frameNumber1 + 2);
			assert.equal(frame2.getNextNextFrame(), frameNumber2 + 2);
		});

	});

	describe('isStrike()', function() {

		it('should verify that a strike is a strike', function() {
			const frame = new Frame({
				first: 10,
				second: 0,
				bonus: 0
			}, 0);

			assert.equal(frame.isStrike(), true);
		});

		it('should not think a 0/10 spare is a strike', function() {
			const frame = new Frame({
				first: 0,
				second: 10,
				bonus: 0
			}, 0);

			assert.equal(frame.isStrike(), false);
		});
	});

	describe('isSpare()', function() {

		it('should recognize all possible spares', function() {
			const frame0 = new Frame({
				first: 0,
				second: 10,
				bonus: 0
			}, 0);
			const frame1 = new Frame({
				first: 1,
				second: 9,
				bonus: 0
			}, 0);
			const frame2 = new Frame({
				first: 2,
				second: 8,
				bonus: 0
			}, 0);
			const frame3 = new Frame({
				first: 3,
				second: 7,
				bonus: 0
			}, 0);
			const frame4 = new Frame({
				first: 4,
				second: 6,
				bonus: 0
			}, 0);
			const frame5 = new Frame({
				first: 5,
				second: 5,
				bonus: 0
			}, 0);
			const frame6 = new Frame({
				first: 6,
				second: 4,
				bonus: 0
			}, 0);
			const frame7 = new Frame({
				first: 7,
				second: 3,
				bonus: 0
			}, 0);
			const frame8 = new Frame({
				first: 8,
				second: 2,
				bonus: 0
			}, 0);
			const frame9 = new Frame({
				first: 9,
				second: 1,
				bonus: 0
			}, 0);

			assert.equal(frame0.isSpare(), true);
			assert.equal(frame1.isSpare(), true);
			assert.equal(frame2.isSpare(), true);
			assert.equal(frame3.isSpare(), true);
			assert.equal(frame4.isSpare(), true);
			assert.equal(frame5.isSpare(), true);
			assert.equal(frame6.isSpare(), true);
			assert.equal(frame7.isSpare(), true);
			assert.equal(frame8.isSpare(), true);
			assert.equal(frame9.isSpare(), true);
		})
	});
});
