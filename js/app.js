

/* App Module */
var App = angular.module('store', [
	'angularUtils.directives.dirPagination',
	'ngRoute',
	'StoreControllers'
	]);

  App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/pults', {
          templateUrl: 'products/pults.html',
          controller: 'PultListCtrl'
        }).
        when('/techs', {
          templateUrl: 'products/techs.html',
          controller: 'TechListCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });
  }]);