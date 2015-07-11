

/* Controllers */

var App = angular.module('store', ['angularUtils.directives.dirPagination']);

/*App.controller('StoreCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('products/pults.json').success(function(data) {
      $scope.pults = data;
    });
}]);
*/
App.controller('StoreCtrl', function($scope) {
    $scope.pults = [
    {'name': 'Пульт 1',
     'snippet': 'Lorem ipsum dolor sit amet.',
 	'price': 100.00},
    {'name': 'Пульт 2',
     'snippet': 'Consectetur adipisicing elit.',
 	'price': 210.00},
    {'name': 'Пульт 3',
     'snippet': 'Nemo temporibus suscipit quod.',
 	'price': 150.00},
	{'name': 'Пульт 4',
     'snippet': 'Tenetur itaque magni est et.',
 	'price': 100.00},
    {'name': 'Пульт 5',
     'snippet': 'Velit, doloribus nostrum dolores.',
 	'price': 210.00},
    {'name': 'Пульт 6',
     'snippet': 'Unde minima placeat, animi, reprehenderit.',
 	'price': 150.00},
    {'name': 'Пульт 7',
     'snippet': 'Consectetur adipisicing elit.',
    'price': 210.00},
    {'name': 'Пульт 8',
     'snippet': 'Nemo temporibus suscipit quod.',
    'price': 150.00},
    {'name': 'Пульт 9',
     'snippet': 'Tenetur itaque magni est et.',
    'price': 100.00},
    {'name': 'Пульт 10',
     'snippet': 'Velit, doloribus nostrum dolores.',
    'price': 210.00},
    {'name': 'Пульт 11',
     'snippet': 'Unde minima placeat, animi, reprehenderit.',
    'price': 150.00},
    {'name': 'Пульт 12',
     'snippet': 'Consectetur adipisicing elit.',
    'price': 210.00},
    {'name': 'Пульт 13',
     'snippet': 'Nemo temporibus suscipit quod.',
    'price': 150.00},
    {'name': 'Пульт 14',
     'snippet': 'Tenetur itaque magni est et.',
    'price': 100.00},
    {'name': 'Пульт 15',
     'snippet': 'Velit, doloribus nostrum dolores.',
    'price': 210.00},
    {'name': 'Пульт 16',
     'snippet': 'Unde minima placeat, animi, reprehenderit.',
    'price': 150.00},
    {'name': 'Пульт 12',
     'snippet': 'Consectetur adipisicing elit.',
    'price': 210.00},
    {'name': 'Пульт 13',
     'snippet': 'Nemo temporibus suscipit quod.',
    'price': 150.00},
    {'name': 'Пульт 14',
     'snippet': 'Tenetur itaque magni est et.',
    'price': 100.00},
    {'name': 'Пульт 15',
     'snippet': 'Velit, doloribus nostrum dolores.',
    'price': 210.00},
    {'name': 'Пульт 16',
     'snippet': 'Unde minima placeat, animi, reprehenderit.',
    'price': 150.00},
    {'name': 'Пульт 17',
     'snippet': 'Consectetur adipisicing elit.',
    'price': 210.00},
    {'name': 'Пульт 18',
     'snippet': 'Nemo temporibus suscipit quod.',
    'price': 150.00},
    {'name': 'Пульт 19',
     'snippet': 'Tenetur itaque magni est et.',
    'price': 100.00},
    {'name': 'Пульт 20',
     'snippet': 'Velit, doloribus nostrum dolores.',
    'price': 210.00},
    {'name': 'Пульт 21',
     'snippet': 'Unde minima placeat, animi, reprehenderit.',
    'price': 150.00}
  ];
  $scope.techs = [
    {'name': 'Бытовая техника',
     'snippet': 'Fast just got faster with Nexus S.',
 	'price': 300.00},
    {'name': 'Бытовая техника 2',
     'snippet': 'The Next, Next Generation tablet.',
 	'price': 510.00},
    {'name': 'Бытовая техника 3',
     'snippet': 'The Next, Next Generation tablet.',
 	'price': 450.00},
    {'name': 'Бытовая техника 4',
     'snippet': 'Fast just got faster with Nexus S.',
 	'price': 300.00},
    {'name': 'Бытовая техника 5',
     'snippet': 'The Next, Next Generation tablet.',
 	'price': 510.00},
    {'name': 'Бытовая техника 6',
     'snippet': 'The Next, Next Generation tablet.',
 	'price': 450.00}
  ];
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.pageChangeHandler = function(num) {
        console.log('going to page ' + num);
    };

});

