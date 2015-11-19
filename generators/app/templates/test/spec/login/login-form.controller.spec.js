'use strict';

describe('In app.login', function() {
  describe('In login-form.controller', function() {

    var LoginFormCtrl, scope;

    beforeEach(module('app'));
    beforeEach(module('app.const'));
    beforeEach(module('app.config'));
    beforeEach(module('app.login'));

    beforeEach(module('angular-corbel', function(corbelDriverProvider) {
      corbelDriverProvider.setConfig({
        urlBase: 'http://example.org/{{module}}',
        clientSecret: 'clientSecret',
        clientId: 'clientId',
        scopes: 'scopes'
      });
    }));

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      LoginFormCtrl = $controller('LoginFormCtrl', {
        $scope: scope
      });
    }));

    it('has all expected methods', function() {

      expect(LoginFormCtrl.login).toBeDefined();

    });

  });
});
