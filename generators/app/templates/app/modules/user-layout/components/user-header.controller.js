(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.user-layout:UserHeaderCtrl
   * @description
   * # UserHeaderCtrl
   * A module to manage user-layout header
   */
  angular.module('app.user-layout')
    .controller('UserHeaderCtrl', UserHeaderCtrl);

  /* @ngInject */
  function UserHeaderCtrl($rootScope, $scope, $state, $localStorage, cfpLoadingBar, usersService) {

    var vm = this;

    vm.username = '';

    vm.logout = logout;
    vm.isActive = isActive;

    _init();

    return vm;

    function _init() {
      return usersService.getMe().then(function(user) {
        vm.username = user.username;
        $scope.$digest();
      });
    }

    function _logoutCallback() {
      cfpLoadingBar.complete();
      return $state.go('home.index');
    }

    function logout() {
      cfpLoadingBar.start();
      return usersService.logout().then(_logoutCallback).catch(_logoutCallback);
    }

    /**
     * Returns whenever a url is active in base current state value
     * @todo: replace with String.prototype.startsWith method or ui-sref-active
     * @param  {string}  state
     * @return {boolean}
     */
    function isActive(state) {
      state = '/' + state;
      return $state.$current.url.source.slice(0, state.length) === state;
    }

  }

})();
