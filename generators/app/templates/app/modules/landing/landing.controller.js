(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.landing:LandingCtrl
   * @description
   * # LandingCtrl
   * A module to manage landing footer
   */
  angular.module('app.landing')
    .controller('LandingCtrl', LandingCtrl);

  /* @ngInject */
  function LandingCtrl($scope, config) {

    var vm = this;

    vm.config = config;

    return vm;

  }

})();
