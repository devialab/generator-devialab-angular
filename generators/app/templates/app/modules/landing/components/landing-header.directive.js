(function() {

  /**
   * app.landing Module
   *
   * landing-header directive
   */
  angular.module('app.landing').directive('landingHeader', LandingHeader);

  function LandingHeader() {

    var directive = {
      templateUrl: '/modules/landing/components/landing-header.html',
      restrict: 'E',
      scope: {},
      controller: 'LandingHeaderCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
