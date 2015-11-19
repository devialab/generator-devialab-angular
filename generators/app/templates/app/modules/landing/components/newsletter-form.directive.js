(function() {

  /**
   * app.landing Module
   *
   * newsletter-form directive
   */
  angular.module('app.landing').directive('newsletterForm', NewsletterForm);

  function NewsletterForm() {

    var directive = {
      templateUrl: '/modules/landing/components/newsletter-form.html',
      restrict: 'E',
      scope: {},
      controller: 'NewsletterFormCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
