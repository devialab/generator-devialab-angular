(function() {

  'use strict';

  angular
    .module('app.<%= moduleName %>')
    .controller('<%= _.upperFirst(moduleName) %>Ctrl', <%= _.upperFirst(moduleName) %>Ctrl);

  /* @ngInject */
  function <%= _.upperFirst(moduleName) %>Ctrl() {

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
