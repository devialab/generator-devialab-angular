(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.landing:NewsletterFormCtrl
   * @description
   * # NewsletterFormCtrl
   * A module to manage newsletter
   */
  angular.module('app.landing')
    .controller('NewsletterFormCtrl', NewsletterFormCtrl);

  /* @ngInject */
  function NewsletterFormCtrl($scope, $analytics) {

    var vm = this;

    vm.submit = submit;

    return vm;

    function submit(email) {
      // @todo
      $analytics.eventTrack('newsletter');
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
