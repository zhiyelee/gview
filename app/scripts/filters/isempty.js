'use strict';

/**
 * @ngdoc filter
 * @name gView.filter:isEmpty
 * @function
 * @description check whether an object is null
 * # isEmpty
 * Filter in the gView.
 */
angular.module('gView')
  .filter('isEmpty', function () {
    return function (obj) {
        for (var bar in obj) {
            if (obj.hasOwnProperty(bar)) {
                return false;
            }
        }
        return true;
    };
  });
