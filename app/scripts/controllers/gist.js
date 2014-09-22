'use strict';

/**
 * @ngdoc function
 * @name gView.controller:GistCtrl
 * @description
 * # GistCtrl
 * Controller of the gView
 */
angular.module('gView')
  .controller('GistCtrl', ['$scope', '$location', 'gist', function ($scope, $location, gist) {
        $scope.gist = gist;
  }]);
