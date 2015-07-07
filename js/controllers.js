

/* Controllers */

var App = angular.module('store', []);

App.controller('StoreCtrl', function($scope) {
  $scope.pults = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
 	'price': 100.00},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
 	'price': 110.00},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
 	'price': 150.00}
  ];
});
