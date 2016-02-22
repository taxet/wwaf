var app = angular.module('WwafApp')
app.controller('DummyCtrl', ['$scope', function($scope) {
  $scope.blogs=[
    {
      img:"",
      tag: "汽车养护",
      content: "美国车险指南",
      url: ""
    },
    {
      img:"",
      tag: "汽车养护",
      content: "我们在创业的路上努力着，致做最好的华人车行",
      url: ""
    },
    {
      img:"",
      tag: "汽车养护",
      content: "如何让爱车不受伤害",
      url: ""
    }
  ];
}])
