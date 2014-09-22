'use strict';

/**
 * @ngdoc function
 * @name gView.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gView
 */
angular.module('gView')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
