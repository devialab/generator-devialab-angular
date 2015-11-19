(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.landing:ContactFormCtrl
   * @description
   * # ContactFormCtrl
   * A module to manage landing footer
   */
  angular.module('app.landing')
    .controller('ContactFormCtrl', ContactFormCtrl);

  /* @ngInject */
  function ContactFormCtrl($scope, $analytics) {

    var vm = this;

    vm.error = '';

    vm.sendForm = sendForm;

    return vm;

    function sendForm() {
      // @todo
      $analytics.eventTrack('contact');
      /*
      .catch(function() {
        $translate('form.error.generic').then(function (translation) {
          vm.error = translation;
          $scope.$digest();
        });
      });
      */
    }

  }

})();
