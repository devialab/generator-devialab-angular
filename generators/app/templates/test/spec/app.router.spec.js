'use strict';

describe('Path', function() {

  var $rootScope, $state, $location, $templateCache, $injector, $localStorage, $sessionStorage;

  beforeEach(module('app'));
  beforeEach(module('ngStorage'));

  beforeEach(inject(function(
    _$templateCache_,
    _$location_,
    _$rootScope_,
    _$state_,
    _$injector_,
    _$localStorage_,
    _$sessionStorage_
  ) {

    $templateCache = _$templateCache_;
    $location = _$location_;
    $rootScope = _$rootScope_;
    $state = _$state_;
    $injector = _$injector_;
    $localStorage = _$localStorage_;
    $sessionStorage = _$sessionStorage_;

  }));

  // Since ui-router will by default try to retrieve your views, we use this tiny function
  // to mock a template for a specific route.
  function mockTemplate(templateRoute, tmpl) {
    $templateCache.put(templateRoute, tmpl || templateRoute);
  }

  // Literally takes you to the specified URL and then does a $digest. Simply to
  // make tests look more readable.
  function goTo(url) {
    $location.url(url);
    $rootScope.$digest();
  }

  // This is used mainly to check onEnter and onExit blocks, as you actually need to do
  // the state transition. We prime the $location so that the ui-router does not immediately
  // go somewhere different on $scope.$digest().
  // function goFrom(url) {
  //   return {
  //     toState: function(state, params) {
  //       $location.replace().url(url); //Don't actually trigger a reload
  //       $state.go(state, params);
  //       $rootScope.$digest();
  //     }
  //   };
  // }

  // Resolve blocks are a bit tricky to test, so this is what I've been using personally.
  // It's a bit weird, but it essentially lets you execute the resolve as if you were
  // ui-router. It uses $injector to get you the fully wired up version of the resolve result.
  // function resolve(value) {
  //   return {
  //     forStateAndView: function(state, view) {
  //       var viewDefinition = view ? $state.get(state).views[view] : $state.get(state);
  //       return $injector.invoke(viewDefinition.resolve[value]);
  //     }
  //   };
  // }

  var USER = {
    username: 'username',
    firstName: 'Anthanh',
    lastName: 'Pham Trinh',
    pass: 'Pham Trinh',
    email: 'test@devialab.com'
  };

  var TOKEN = {
    accessToken: 'token',
    expiresAt: 123123123,
    refreshToken: 'refreshToken'
  };

  beforeEach(function() {

    mockTemplate('modules/login/login.html');
    mockTemplate('modules/user-layout/user-layout.html');
    mockTemplate('modules/content/content.html');
    mockTemplate('modules/account/account.html');
    mockTemplate('modules/landing/landing-layout.html');
    mockTemplate('modules/landing/landing.html');
    mockTemplate('modules/landing/landing-support.html');
    mockTemplate('modules/landing/landing-terms.html');
    mockTemplate('modules/landing/landing-about.html');
    mockTemplate('modules/landing/landing-why.html');

  });

  xdescribe('When', function() {

    describe('is not loggedin', function() {

      beforeEach(function() {
        $localStorage.$reset();
        $sessionStorage.$reset();
      });

      it(', go to home view for privileged states', function() {
        goTo('');
        expect($state.current.name).toEqual('home.index');
        goTo('/');
        expect($state.current.name).toEqual('home.index');
        goTo('/home');
        expect($state.current.name).toEqual('home.index');
        goTo('/home');
        expect($state.current.name).toEqual('home.index');
        goTo('/home/support');
        expect($state.current.name).toEqual('home.support');
        goTo('/home/terms');
        expect($state.current.name).toEqual('home.terms');
        goTo('/home/about');
        expect($state.current.name).toEqual('home.about');
        goTo('/home/why');
        expect($state.current.name).toEqual('home.why');
        goTo('/content');
        expect($state.current.name).toEqual('login');
      });

    });

    describe('is loggedin', function() {

      beforeEach(function() {
        $sessionStorage.user = USER;
        $sessionStorage.token = TOKEN;
      });

      it(', go to specific view', function() {
        goTo('');
        expect($state.current.name).toEqual('user.content');
        goTo('/');
        expect($state.current.name).toEqual('user.content');
        goTo('/home');
        expect($state.current.name).toEqual('home.index');
        goTo('/home');
        expect($state.current.name).toEqual('home.index');
        goTo('/home/support');
        expect($state.current.name).toEqual('home.support');
        goTo('/home/terms');
        expect($state.current.name).toEqual('home.terms');
        goTo('/home/about');
        expect($state.current.name).toEqual('home.about');
        goTo('/home/why');
        expect($state.current.name).toEqual('home.why');
        goTo('/content');
        expect($state.current.name).toEqual('user.content');
      });

    });

  });

});
