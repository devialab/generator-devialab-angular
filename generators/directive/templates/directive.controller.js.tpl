(function() {

  'use strict';

  angular
    .module('app.<%= moduleName %>')
    .controller('<%= _.upperFirst(directiveName) %>Ctrl', <%= _.upperFirst(directiveName) %>Ctrl);

  /* @ngInject */
  function <%= _.upperFirst(directiveName) %>Ctrl() {

    var vm = this;

    vm.attr = 'defaultValue';

    vm.someFunction = someFunction;

    _init();

    return vm;

    function _init() {
      _addEventListners();
    }

    function _addEventListners() {}

    function someFunction() {}

  }

})();
