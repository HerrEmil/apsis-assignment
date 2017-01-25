function validRoll(roll) {
	return roll != null && roll != '';
}

function calculateTotal(req, res) {
	// console.log('Received request:')
	// console.log(req.body);

	let score = 0;
	let first, second, bonus, nextFrameRoll;

	let frames = req.body.frames;

	for (let i = 0; i < frames.length; i += 1) {
		first = second = bonus = nextFrameRoll = 0;
		// Check if the rolls are valid
		if (validRoll(frames[i].first)) {
			first = parseInt(frames[i].first);
		}
		if (validRoll(frames[i].second)) {
			second = parseInt(frames[i].second);
		}
		if (frames[i].bonus != undefined && validRoll(frames[i].bonus)) {
			bonus = parseInt(frames[i].bonus)
		}

		// Add knocked down pins to score
		score += first + second + bonus;

		// Store the value of the next frame's first roll for strikes and spares
		if (frames[i + 1] != undefined && // We are not in the last frame
			validRoll(frames[i + 1].first)) { // The next roll has a value
			nextFrameRoll = parseInt(frames[i + 1].first);
		}

		// Strikes and spares logic
		if (first === 10) {
			// In case of strike
			score += nextFrameRoll;
			// If the next frame first roll is not a strike,
			// the second following roll is the second roll in the next frame
			if (nextFrameRoll != 10 &&
				frames[i + 1] != undefined &&
				validRoll(frames[i + 1].second)) {
				score += parseInt(frames[i + 1].second)
			}
			// next roll a strike
			if (nextFrameRoll === 10 &&
				frames[i + 2] != undefined &&
				validRoll(frames[i + 2].first)) {
				score += parseInt(frames[i + 2].first)
			}
			// Second to last frame
			if (i === 8 &&
				validRoll(frames[9].second)) {
				score += parseInt(frames[i + 1].second);
			}
		} else if (first + second === 10) {
			// In case of spare
			score += nextFrameRoll;
			// If we get a spare in the last frame,
			// the bonus ball decides the added score
			if (i === 9) {
				score += bonus;
			}
		}
	}

	let response = {
		"score": score
	};

	// console.log('Sending response:')
	// console.log(response)
	res.send(response)
}

module.exports.calculateTotal = calculateTotal;
