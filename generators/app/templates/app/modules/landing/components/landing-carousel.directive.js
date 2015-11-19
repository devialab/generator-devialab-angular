(function() {

  /**
   * app.landing Module
   *
   * landingCarousel directive
   */
  angular.module('app.landing').directive('landingCarousel', LandingCarousel);

  function LandingCarousel() {

    var directive = {
      templateUrl: '/modules/landing/components/landing-carousel.html',
      restrict: 'E'
    };
    return directive;

  }

})();
