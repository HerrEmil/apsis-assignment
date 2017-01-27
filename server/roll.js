class Roll {

	constructor(score) {
		this.score = parseInt(score);
	}

	isValid() {
		return this.score != NaN &&
			this.score > -1 &&
			this.score < 11;
	}

	getScore() {
		if (this.isValid()) {
			return this.score;
		} else {
			return 0;
		}
	}
}

module.exports = Roll;
