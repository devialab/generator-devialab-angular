(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.landing:LandingFooterCtrl
   * @description
   * # LandingFooterCtrl
   * A module to manage landing footer
   */
  angular.module('app.landing')
    .controller('LandingFooterCtrl', LandingFooterCtrl);

  /* @ngInject */
  function LandingFooterCtrl(i18n, config) {

    var vm = this;

    vm.config = config;
    vm.setLang = setLang;

    return vm;

    function setLang(lang) {
      return i18n.setLang(lang);
    }

  }

})();
