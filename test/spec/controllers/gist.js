'use strict';

describe('Controller: GistCtrl', function () {

  // load the controller's module
  beforeEach(module('gView'));

  var GistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GistCtrl = $controller('GistCtrl', {
      $scope: scope
    });
  }));

});
