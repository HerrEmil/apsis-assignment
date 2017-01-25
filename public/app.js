var app = angular.module('bowlingApp', []);

app.controller('GameController', function($http) {
	var game = this;

	game.frames = [{
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
	}];

	game.result = 0;

	game.calculate = function() {
		$http.post('/calculate-bowling-score', {
				"frames": game.frames
			})
			.then(function successCallback(response) {
				game.result = response.data.score;
			}, function errorCallback(response) {
				console.log('error:');
				console.log(response);
			});
	};
});
