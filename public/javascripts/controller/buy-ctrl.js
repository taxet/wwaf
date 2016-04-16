(function(){
	'use strict';
	var app = angular.module('WwafApp');
	app.controller('carsCtrl', ['$scope', '$http', 'apiFactory', function($scope, $http, apiFactory){
		$scope.cars = [];
		var targetUrl = apiFactory.allCars;
		$http.get(targetUrl).then(function(res){
			$scope.cars = res.data;
		}, function(err){
			console.log(err);
		});
	}]);
})();