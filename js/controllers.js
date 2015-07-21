'use strict';

/* Controllers */

var StoreControllers = angular.module('StoreControllers',['ui.bootstrap']);

StoreControllers.factory('myhttpserv', function ($http) {
    return $http.get('storage.txt').error(function(status){console.log(status)});
});

StoreControllers.controller('PultListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('products/pultss.json').success(function(data) {
      $scope.pults = data;
    });
    $scope.currentPage = 1;
    //$scope.pageSize = 9;
}]);

StoreControllers.controller('TechListCtrl', ['$scope', function($scope){
  $scope.techs = [
    {'name': 'Бытовая техника',
     'snippet': 'Fast just got faster with Nexus S.',
     'by': 'IWI',
    'price': 300.00},
    {'name': 'Бытовая техника 2',
     'snippet': 'The Next, Next Generation tablet.',
     'by': 'IWI',
    'price': 510.00},
    {'name': 'Бытовая техника 3',
     'snippet': 'The Next, Next Generation tablet.',
     'by': 'IWI',
    'price': 450.00},
    {'name': 'Бытовая техника 4',
     'snippet': 'Fast just got faster with Nexus S.',
     'by': 'IWI',
    'price': 300.00},
    {'name': 'Бытовая техника 5',
     'snippet': 'The Next, Next Generation tablet.',
     'by': 'IWI',
    'price': 510.00},
    {'name': 'Бытовая техника 6',
     'snippet': 'The Next, Next Generation tablet.',
     'by': 'deawoo',
    'price': 450.00},
    {'name': 'Бытовая техника 7',
     'snippet': 'The Next, Next Generation tablet.',
     'by': 'deawoo',
    'price': 510.00},
    {'name': 'Бытовая техника 8',
     'snippet': 'The Next, Next Generation tablet.',
     'by': 'deawoo',
    'price': 450.00},
    {'name': 'Бытовая техника 9',
     'snippet': 'Fast just got faster with Nexus S.',
     'by': 'deawoo',
    'price': 300.00},
    {'name': 'Бытовая техника 10',
     'snippet': 'The Next, Next Generation tablet.',
     'by': 'deawoo',
    'price': 510.00},
    {'name': 'Бытовая техника 11',
     'snippet': 'The Next, Next Generation tablet.',
    'price': 450.00},
    {'name': 'Бытовая техника 12',
     'snippet': 'The Next, Next Generation tablet.',
    'price': 450.00}
  ];
    $scope.currentPage = 1;
    //$scope.pageSize = 10;
}]);

StoreControllers.controller('ReviewCtrl', function ($scope, myhttpserv, $http) {
    myhttpserv.then(function(response){
        $scope.todos = (response.data !== null) ? response.data : [];
        var httpPost = function() {
            $http.post('save.php', JSON.stringify($scope.todos)).error(function(status){console.log(status)});
        };
        $scope.todoId = $scope.todos.length;
        $scope.addReview = function() {
            $scope.todos.push({
                stars: $scope.todoStars,
                body: $scope.todoBody,
                name: $scope.todoName
            });
            $scope.todoStars = ''; 
            $scope.todoBody = ''; 
            $scope.todoName = ''; 
            httpPost();
        };
        $('.splash, .containerx, .reviews').fadeToggle();
    });  
    $scope.rate = 1;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };
    $scope.ratingStates = [
        {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
    ];   
});
