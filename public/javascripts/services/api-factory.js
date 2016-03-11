(function() {
var app = angular.module('WwafApp');
app.factory('apiFactory', function() {
  var obj = {
    'indexBlogs': "./api/blogs/index",
    'allCars': './api/cars',
    'getCarById': function(id) {
      return './api/cars/#/id';
    }
  }
  return obj;
})
})();
