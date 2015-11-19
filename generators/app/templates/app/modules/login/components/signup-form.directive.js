(function() {

  /**
   * app.login Module
   *
   * singup-form directive
   */
  angular.module('app.login').directive('signupForm', SignupForm);

  function SignupForm() {

    var directive = {
      templateUrl: '/modules/login/components/signup-form.html',
      restrict: 'E',
      scope: {},
      controller: 'SignupFormCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
