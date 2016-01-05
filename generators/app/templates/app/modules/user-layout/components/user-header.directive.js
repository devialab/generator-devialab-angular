(function() {

  /**
   * app.user-layout Module
   *
   * user-layout-header directive
   */
  angular.module('app.user-layout').directive('userHeader', UserHeader);

  function UserHeader() {

    var directive = {
      templateUrl: '/modules/user-layout/components/user-header.html',
      restrict: 'E',
      scope: {},
      controller: 'UserHeaderCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
