(function() {
  'use strict';

  angular
    .module('app')
    .config(appConfig)
    .run(appRun);


  /* @ngInject */
  function appConfig($stateProvider, $urlRouterProvider, CONFIG) {

    var base = '/modules/';

    // @todo: controllerAs issue: https://github.com/driftyco/ionic/issues/3058
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: base + 'login/login.html',
      data: {
        requireLogin: false
      }
    }).state('signup', {
      url: '/signup',
      templateUrl: base + 'login/signup.html',
      data: {
        requireLogin: false
      }

    }).state('user', {
      abstract: true,
      templateUrl: base + 'user-layout/user-layout.html'
    }).state('user.account', {
      url: '/account',
      templateUrl: base + 'account/account.html',
      controller: 'AccountCtrl',
      controllerAs: 'vm',
      data: {
        requireLogin: true
      }
    })

    // Example user page
    .state('user.content', {
      url: '/content',
      templateUrl: base + 'content/content.html',
      controller: 'ContentCtrl',
      controllerAs: 'vm',
      data: {
        requireLogin: true
      }
    })


    .state('home', {
        abstract: true,
        templateUrl: base + 'landing/landing-layout.html'
      })
      .state('home.index', {
        url: '/home',
        templateUrl: base + 'landing/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'vm',
      })
      .state('home.support', {
        url: '/home/support',
        templateUrl: base + 'landing/landing-support.html'
      })
      .state('home.terms', {
        url: '/home/terms',
        templateUrl: base + 'landing/landing-terms.html'
      })
      .state('home.privacy', {
        url: '/home/privacy',
        templateUrl: base + 'landing/landing-privacy.html'
      })
      .state('home.about', {
        url: '/home/about',
        templateUrl: base + 'landing/landing-about.html'
      })
      .state('home.why', {
        url: '/home/why',
        templateUrl: base + 'landing/landing-why.html'
      });

    $urlRouterProvider.otherwise(function($injector) {
      var usersService = $injector.get('usersService');
      return usersService.isLoggedSync() ? '/content' : '/home';
    });

  }

  /* @ngInject */
  function appRun($rootScope, $state, usersService) {

    $rootScope.$on('$stateChangeStart', function(event, toState) {
      toState.data = toState.data || {};
      var requireLogin = toState.data.requireLogin;

      if (requireLogin && !usersService.isLoggedSync()) {
        event.preventDefault();
        return $state.go('login');
      }
    });
  }

})();
