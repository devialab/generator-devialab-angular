(function() {

  /**
   * app.landing Module
   *
   * contactForm directive
   */
  angular.module('app.landing').directive('contactForm', ContactForm);

  function ContactForm() {

    var directive = {
      templateUrl: '/modules/landing/components/contact-form.html',
      restrict: 'E',
      scope: {},
      controller: 'ContactFormCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
