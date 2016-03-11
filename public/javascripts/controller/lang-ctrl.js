(function() {
  'use script'
var app = angular.module('WwafApp');
app.controller('LangCtrl', ['$scope', '$translate', 'localStorageService', function($scope, $translate, localStorageService){
    $scope.lang = localStorageService.get('lang') || "cn";
    $scope.changeLang = function(lang) {
        if (lang === "cn") {
          $scope.msg = $translate.use("cn");
          localStorageService.set("lang", "cn");
          $scope.lang = "cn";
        } else {
          $scope.msg = $translate.use("en");
          localStorageService.set("lang", "en");
          $scope.lang = "en";
        }
    }

    $scope.toggleLang = function() {
      if($scope.lang === "en"){
        $scope.changeLang("cn");
      } else {
        $scope.changeLang("en");
      }
    }

}]);
})();
