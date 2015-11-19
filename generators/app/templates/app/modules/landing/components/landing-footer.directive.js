(function() {

  /**
   * app.landing Module
   *
   * landingFooter directive
   */
  angular.module('app.landing').directive('landingFooter', LandingFooter);

  function LandingFooter() {

    var directive = {
      templateUrl: '/modules/landing/components/landing-footer.html',
      restrict: 'E',
      scope: {},
      controller: 'LandingFooterCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
