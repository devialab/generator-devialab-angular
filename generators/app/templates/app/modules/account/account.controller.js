(function() {
  'use strict';

  angular
    .module('app.account')
    .controller('AccountCtrl', AccountCtrl);

  /* @ngInject */
  function AccountCtrl(
    $log,
    $scope,
    $timeout,
    $state,
    $translate,
    i18n,
    cfpLoadingBar,
    defaultLang,
    usersService
  ) {

    var vm = this;

    vm.lang = defaultLang.name;
    vm.langOptions = [{
      name: $translate.instant('english'),
      value: defaultLang.name,
    }, {
      name: $translate.instant('spanish'),
      value: 'es',
    }];

    vm.updateAccount = updateAccount;
    vm.changePassword = changePassword;

    _init();

    return vm;


    function _init() {

      _addEventListeners();

      // @todo: improve this
      $timeout(function() {
        angular.element('.nav.nav-pills.nav-stacked').addClass('col-sm-3');
      });

      var defaultLangPromise = i18n.getDefaultLang().then(function(lang) {
        vm.lang = lang? lang: vm.lang;
        $log.debug('account.defaultLang', lang);
      });

      return Promise.all([_loadMe(), defaultLangPromise]).then(function() {
        $scope.$digest();
      });
    }

    function _addEventListeners() {
      $scope.$watch('vm.email', function(newValue) {
        usersService.isEmailAvailable(newValue).catch(function() {
          vm.error = 'conflict';
        });
      });
    }

    function _loadMe() {
      return usersService.getMe().then(function(user) {
        vm.firstName = user.firstName;
        vm.lastName = user.lastName;
        vm.email = user.email;
        vm.phone = user.properties.phone;
      });
    }

    function updateAccount() {
      cfpLoadingBar.start();
      return usersService.update({
        username: vm.email,
        email: vm.email,
        firstName: vm.firstName,
        lastName: vm.lastName,
        properties: {
          phone: vm.phone,
          lang: vm.lang
        }
      }).then(function() {
        i18n.setLang(vm.lang);
        cfpLoadingBar.complete();
      }).catch(_submitErrorHandler);
    }

    function changePassword() {
      cfpLoadingBar.start();
      return usersService.confirm(vm.current).then(function() {

        return usersService.update({
          password: vm.new
        });

      }).then(function() {
        cfpLoadingBar.complete();
      }).catch(_submitErrorHandler);
    }

    function _submitErrorHandler(response) {
      vm.error = response.data.error;
      $scope.$digest();
      cfpLoadingBar.complete();
    }

  }

})();
