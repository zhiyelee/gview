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
    'ngSanitize',
    'ngTouch',
    'ui.router',
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    // For any unmatched url, redirect to /state1
//    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })
      .state('gist', {
        url: '/:gistId',
        templateUrl: 'views/gist.html',
        controller: 'GistCtrl',
        resolve: {
            gist: ['gistLoader', function (gistLoader) {
                return gistLoader();
            }]
        }
      });
  }]);
