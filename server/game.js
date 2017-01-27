const Frame = require('./frame')

class Game {

	constructor(frames) {
		this.frames = [];

		for (let i = 0; i < frames.length; i += 1) {
			this.frames[i] = new Frame(frames[i], i);
		}
	}

	calculateTotal() {

		let score = 0;

		for (const frame of this.frames) {

			// Shortcuts for readability
			const nextFrame = this.frames[frame.getNextFrame()];
			const nextNextFrame = this.frames[frame.getNextNextFrame()];

			// Add each roll in current frame to score
			score += frame.first.getScore();
			score += frame.second.getScore();
			score += frame.bonus.getScore();

			// Strikes and Spares
			if (frame.isStrike() && !frame.isLastFrame()) {

				// Add first roll of next frame to score
				score += nextFrame.first.getScore();

				// If next frame is not a strike,
				// or current frame is second to last,
				// add the second roll of next frame to score
				if (!nextFrame.isStrike() || frame.isSecondToLast()) {
					score += nextFrame.second.getScore();
				} else {
					// If the next frame is also strike,
					// add first roll of frame after the next
					score += nextNextFrame.first.getScore();
				}

			} else if (frame.isSpare()) {
				// Spares in last frame add bonus ball to score
				if (frame.isLastFrame()) {
					score += frame.bonus.getScore();
				} else {
					// Spares in all but last frame add first roll in next frame to score
					score += nextFrame.first.getScore();
				}
			}
		}

		return score;
	}
}

module.exports = Game;
