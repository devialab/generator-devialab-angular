(function() {
  'use strict';

  angular
    .module('app.account')
    .controller('AccountCtrl', AccountCtrl);

  /* @ngInject */
  function AccountCtrl($timeout) {

    var vm = this;

    _init();

    return vm;

    function _init() {
      // @todo: improve this
      $timeout(function() {
        angular.element('.nav.nav-pills.nav-stacked').addClass('col-sm-3');
      });
    }
  }

})();
