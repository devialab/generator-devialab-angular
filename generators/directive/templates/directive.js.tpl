(function() {

  /**
   * app.<%= moduleName %> Module
   *
   * <%= directiveName %> directive
   */
  angular.module('app.<%= moduleName %>').directive('<%= directiveName %>', <%= _.upperFirst(directiveName) %>);

  function <%= _.upperFirst(directiveName) %>() {

    var directive = {
      templateUrl: '/modules/landing/components/<%= _.kebabCase(directiveName) %>.html',
      restrict: 'E',
      scope: {},
      controller: '<%= _.upperFirst(directiveName) %>Ctrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
