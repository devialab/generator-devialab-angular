(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.landing:MailingFormCtrl
   * @description
   * # MailingFormCtrl
   * A module to manage mailing
   */
  angular.module('app.landing')
    .controller('MailingFormCtrl', MailingFormCtrl);

  /* @ngInject */
  function MailingFormCtrl($log, $scope, $analytics, $translate, corbelDriver) {

    var vm = this;

    vm.submit = submit;

    return vm;

    function submit(email) {
      if (!email) {
        return Promise.resolve();
      }

      return corbelDriver.resources.collection('<%= domain %>:Emails').add({
        email: email,
        language: $translate.preferredLanguage()
      }).then(function() {
        $analytics.eventTrack('mailing');
      });
    }

  }

})();