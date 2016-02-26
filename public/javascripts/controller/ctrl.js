var app = angular.module('WwafApp',['pascalprecht.translate',
  'LocalStorageModule']);
app.config(['$translateProvider', function($translateProvider) {
  var lang = 'cn';
  $translateProvider.preferredLanguage(lang);
  $translateProvider.useStaticFilesLoader({
    prefix: '/i18n/',
    suffix: '.json'
  });
}]).config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('wwaf');
}]);
