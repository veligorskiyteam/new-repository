

/* Controllers */

//var App = angular.module('store', ['angularUtils.directives.dirPagination']);

/*App.controller('StoreCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('products/pults.json').success(function(data) {
      $scope.pults = data;
    });
}]);
*/
var StoreControllers = angular.module('StoreControllers',[]);
   StoreControllers.controller('PultListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('products/pultss.json').success(function(data) {
      $scope.pults = data;
    });
    $scope.currentPage = 1;
    $scope.pageSize = 10;
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
    $scope.reviews = [
    {'stars': 5,
    'body': 'Крутой сайт',
    'author': 'Иванов Алекс',
    createdOn: 1397490980837}
    ];
    $scope.currentPage = 1;
    $scope.pageSize = 10;
}]);

StoreControllers.controller('ReviewCtrl', function($scope){
    $scope.review = {};
    $scope.addReview = function() {
        $scope.reviews.push($scope.review);
        console.log($scope.review);
        $scope.review = {};
        console.log($scope.review);
  };
});