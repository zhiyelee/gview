'use strict';

/**
 * @ngdoc function
 * @name gView.controller:GistCtrl
 * @description
 * # GistCtrl
 * Controller of the gView
 */
angular.module('gView')
  .controller('GistCtrl', ['$scope', 'gist', '$window', function ($scope, gist, $window) {
        $scope.gist = gist;
        $window.document.title = gist.description + '- gView by zhiyelee';
  }]);
