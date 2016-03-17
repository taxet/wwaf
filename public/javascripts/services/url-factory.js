(function() {
var app = angular.module('WwafApp');
app.factory('urlFactory', function() {
  var obj = {
  	"buy": "/#/buy",
  	"sell": "/#/sell",
  	"help": "/#/help",
  	"login": "/#/login",
  	"signup": "/#/signup",
  	"policy": "/#/policy",

  	"titleImg": "/images/title.jpg"
  }
  return obj;
})
})();
