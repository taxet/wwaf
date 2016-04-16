(function(angular){
    'use strict';
	var app = angular.module('WwafApp');
	app.factory('carFactory', ['apiFactory', '$http', function(apiFactory, $http){
		var fact = {};
		var target = apiFactory.allCars;
		fact.getCars = function(){
			var promise = $http.get(target, function(res){
				console.log(res.data);
				fact.data=res.data;
				return fact.data;
			});
			return promise;
		}
		return fact;
	}])
})(window.angular);