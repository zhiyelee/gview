'use strict';

/**
 * @ngdoc directive
 * @name gView.directive:markdown
 * @description
 * # markdown
 */
angular.module('gView')
  .directive('markdown', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element) {
        element.html(scope.file.html);
      }
    };
  });
