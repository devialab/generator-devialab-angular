(function() {

  'use strict';
  angular.module('app.utils').directive('a', function() {
    return {
      restrict: 'E',
      link: function(scope, elem, attrs) {
        if (attrs.href && attrs.href.indexOf('#') > -1) {
          elem.on('click', function(e) {
            window.scrollTo(0, 0);
          });
        }
      }
    };
  });

})();
