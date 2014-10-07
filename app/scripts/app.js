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
    'ngResource',
    'ngTouch',
    'ui.router',
    'td.easySocialShare'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');

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
            gist: ['$stateParams', 'gistLoader', function ($stateParams, gistLoader) {
                return gistLoader($stateParams);
            }]
        }
      });
  }]);
