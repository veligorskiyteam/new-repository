

/* Controllers */

var App = angular.module('store', []);

App.controller('StoreCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('products/pults.json').success(function(data) {
      $scope.pults = data;
    });
}]);