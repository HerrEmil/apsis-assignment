const Roll = require('./roll');

class Frame {

	constructor(frameObject, frameNumber) {
		this.first = new Roll(frameObject.first);
		this.second = new Roll(frameObject.second);
		this.bonus = new Roll(frameObject.bonus);
		this.frameNumber = frameNumber;
	}

	isLastFrame() {
		return this.frameNumber === 9;
	}

	isSecondToLast() {
		return this.frameNumber === 8;
	}

	getNextFrame() {
		return this.frameNumber + 1;
	}

	getNextNextFrame() {
		return this.frameNumber + 2;
	}

	isStrike() {
		return this.first.score === 10;
	}

	isSpare() {
		return (this.first.score + this.second.score) === 10;
	}

	score() {
		return this.first.score + this.second.score + this.bonus.score;
	}
}

module.exports = Frame;
