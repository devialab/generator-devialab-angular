(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.login:LoginFormCtrl
   * @description
   * # LoginFormCtrl
   * A module to manage login form
   */
  angular.module('app.login')
    .controller('LoginFormCtrl', LoginFormCtrl);

  /* @ngInject */
  function LoginFormCtrl($scope, $state, $translate, cfpLoadingBar, usersService, corbel) {

    var vm = this;

    vm.error = '';

    vm.login = login;

    return vm;

    function login(username, password, persistent) {
      cfpLoadingBar.start();
      vm.error = '';
      return usersService.login(username, password, persistent).then(function() {
        cfpLoadingBar.complete();
        return $state.go('user.content');
      }).catch(function() {
        $translate('login.form.error.generic').then(function (translation) {
          vm.error = translation;
          $scope.$digest();
        });
        cfpLoadingBar.complete();
      });
    }

  }

})();
