'use strict';

/**
 * @ngdoc function
 * @name gView.controller:GistCtrl
 * @description
 * # GistCtrl
 * Controller of the gView
 */
angular.module('gView')
  .controller('GistCtrl', ['$scope', 'gist', function ($scope, gist) {
        $scope.gist = gist;
  }]);
