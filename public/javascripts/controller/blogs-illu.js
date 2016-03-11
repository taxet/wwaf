(function() {
	'use strict';
	var app = angular.module('WwafApp');
	app.controller('BlogsIlluCtrl', ['$scope', '$http', 'apiFactory', function($scope, $http, apiFactory){
		$scope.blogs = [];
		var targetUrl = apiFactory.indexBlogs;
		$http.get(targetUrl).then(function(res){
			$scope.blogs = res.data.slice(0, 4);
		}, function(err){
			console.log(err);
		});
		console.log($scope.blogs);
	}])
})();
