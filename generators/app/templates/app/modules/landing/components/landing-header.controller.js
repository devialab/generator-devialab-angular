(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.landing:LandingHeaderCtrl
   * @description
   * # LandingHeaderCtrl
   * A module to manage landing header
   */
  angular.module('app.landing')
    .controller('LandingHeaderCtrl', LandingHeaderCtrl);

  /* @ngInject */
  function LandingHeaderCtrl($state, $scope, _, config) {

    var vm = this;

    vm.config = config;

    vm.isActive = isActive;

    return vm;

    /**
     * Returns whenever a url is active in base current state value
     * @todo: replace with String.prototype.startsWith method
     * @param  {string}  state
     * @return {boolean}
     */
    function isActive(state) {
      state = '/' + state;
      return $state.$current.url.source.slice(0, state.length) === state;
    }

  }

})();
