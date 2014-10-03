'use strict';

/**
 * @ngdoc filter
 * @name gView.filter:isEmpty
 * @function
 * @description
 * # isEmpty
 * Filter in the gView.
 */
angular.module('gView')
  .filter('isEmpty', function () {
    var bar;
    return function (obj) {
        console.log(obj)
        for (bar in obj) {
            if (obj.hasOwnProperty(bar)) {
                return false;
            }
        }
        return true;
    };
  });
