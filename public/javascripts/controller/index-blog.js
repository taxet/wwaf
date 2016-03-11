(function(){
var app = angular.module('WwafApp');
app.controller('IndexBlogCtrl', ['$scope', '$http', 'apiFactory', function($scope, $http, apiFactory) {
  $scope.blog;
  var targetUrl = apiFactory.indexBlogs;
  $http.get(targetUrl).then(function(res){
    $scope.blog = res.data;
  }, function(err){
    console.log(err);
  });
}])
})();
