var app = angular.module('bowlingApp', ['calculateService']);

app.controller('GameController', function($http, Calculator) {
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
		Calculator.calculate(game);
	}
});
