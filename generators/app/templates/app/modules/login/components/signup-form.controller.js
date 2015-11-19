(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.login:SignupFormCtrl
   * @description
   * # SignupFormCtrl
   * A module to manage sign up
   */
  angular.module('app.login')
    .controller('SignupFormCtrl', SignupFormCtrl);

  /* @ngInject */
  function SignupFormCtrl($scope, $state, $translate, cfpLoadingBar, usersService) {

    var vm = this;

    vm.error = '';

    vm.signup = signup;

    return vm;

    function signup(email, username, password) {
      cfpLoadingBar.start();
      vm.error = '';
      return usersService.signup(email, username, password).then(function() {
        return usersService.login(username, password);
      }).then(function() {
        cfpLoadingBar.complete();
        $state.go('user.content');
      }).catch(function() {
        $translate('signup.form.error.conflict').then(function (translation) {
          vm.error = translation;
        });
        cfpLoadingBar.complete();
      });
    }

  }

})();
