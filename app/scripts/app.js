'use strict';
angular.module('confusionApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider

  .when('/contactus', {
    templateUrl: 'views/contactus.html',
    controller: 'ContactController'
  })

  .when('/menu', {
    templateUrl: 'views/menu.html',
    controller: 'MenuController'
  })

  .when('/menu/:id', {
    templateUrl: 'views/dishdetail.html',
    controller: 'DishDetailController'
  })

  .otherwise('/contactus');
});
