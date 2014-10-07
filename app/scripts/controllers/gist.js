'use strict';

/**
 * @ngdoc function
 * @name gView.controller:GistCtrl
 * @description
 * # GistCtrl
 * Controller of the gView
 */
angular.module('gView')
  .controller('GistCtrl', ['$scope', 'gistLoader', '$window', '$stateParams', function ($scope, gistLoader, $window, $stateParams) {
        $scope.isLoading = true;
        gistLoader($stateParams).then(function (data) {
            $scope.isLoading = false;
            $window.document.title = data.description + '- gView by zhiyelee';
            $scope.gist = data;
        });
  }]);
