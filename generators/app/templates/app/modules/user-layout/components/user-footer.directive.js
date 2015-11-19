(function() {

  /**
   * app.user-layout Module
   *
   * userFooter directive
   */
  angular.module('app.user-layout').directive('userFooter', UserFooter);

  function UserFooter() {

    var directive = {
      templateUrl: '/modules/user-layout/components/user-footer.html',
      restrict: 'E'

    };
    return directive;

  }

})();
