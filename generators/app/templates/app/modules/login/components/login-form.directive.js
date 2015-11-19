(function() {

  /**
   * app.login Module
   *
   * login-form directive
   */
  angular.module('app.login').directive('loginForm', LoginForm);

  function LoginForm() {

    var directive = {
      templateUrl: '/modules/login/components/login-form.html',
      restrict: 'E',
      scope: {},
      controller: 'LoginFormCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
