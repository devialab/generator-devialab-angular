(function() {

  /**
   * app.landing Module
   *
   * mailing-form directive
   */
  angular.module('app.landing').directive('mailingForm', MailingForm);

  function MailingForm() {

    var directive = {
      templateUrl: '/modules/landing/components/mailing-form.html',
      restrict: 'E',
      scope: {},
      controller: 'MailingFormCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
