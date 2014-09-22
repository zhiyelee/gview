'use strict';

/**
 * @ngdoc overview
 * @name gView
 * @description
 * # gView
 *
 * Main module of the application.
 */
angular
  .module('gView', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/:gistId', {
        templateUrl: 'views/gist.html',
        controller: 'GistCtrl',
        resolve: {
            gist: ['gistLoader', function (gistLoader) {
                return gistLoader();
            }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
