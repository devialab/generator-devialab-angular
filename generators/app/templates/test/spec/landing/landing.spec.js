'use strict';

describe('Controller: LandingCtrl', function() {

  var LandingCtrl, scope;

  beforeEach(module('app.landing'));
  beforeEach(module('app.config'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, config) {
    scope = $rootScope.$new();
    LandingCtrl = $controller('LandingCtrl', {
      $scope: scope,
      config: config
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(true).toBe(true);
  });
});
