var app = angular.module('WwafApp',[]);
app.controller('LangCtrl', ['$scope', function($scope){
    var msg = {};
    $scope.lang="cn";
    msg.en = {
        index: "index",
        buy: "buy",
        sell: "sell",
        help: "help",
        login: "login",
        signup: "sign up",
        language: "language",
        aboutus: "About Us",
        contactus: "Contact Us",
        ourteam: "our team",
        ourbel: "our belief",
        opentime: "Open Time",
        mtf: "Monday to Friday",
        username: "username",
        password: "password",
        phone: "phone",
        confirm: "confirm",
        another: "中"
    };
    msg.cn = {
        index: "首页",
        buy: "我要买车",
        sell: "我要卖车",
        help: "帮助中心",
        login: "登录",
        signup: "注册",
        language: "语言",
        aboutus: "关于我们",
        contactus: "联系我们",
        ourteam: "环球团队",
        ourbel: "环球理念",
        opentime: "营业时间",
        mtf: "周一至周五",
        username: "用户名",
        password: "密码",
        phone: "电话",
        confirm: "确认",
        another: "En"
    };
    $scope.msg = msg.cn;

    $scope.changeLang = function(lang) {
        if (lang === "cn") {
          $scope.lang="cn";
          $scope.msg = msg.cn;
        } else {
          $scope.lang="en";
          $scope.msg = msg.en;
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
app.controller('LoginCtrl', ['$scope', function($scope){
    $scope.open = function() {

    }
}])
