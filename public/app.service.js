var calculateService = angular.module('calculateService', []);
calculateService.factory('Calculator', ['$http', function($http) {

	var Calculator = {};
	Calculator.calculate = function(game) {
		$http.post('/calculate-bowling-score', {
			"frames": game.frames
		}).then(function successCallback(response) {
			game.result = response.data.score;
		}, function errorCallback(response) {
			console.log('error:');
			console.log(response);
		});

	};

	return Calculator;
}]);
