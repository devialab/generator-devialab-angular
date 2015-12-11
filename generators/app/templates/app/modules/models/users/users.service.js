(function() {
  'use strict';

  /**
   * app.usersService Module
   *
   * usersService utils
   */
  angular.module('app').factory('usersService', usersService);

  /* @ngInject */
  function usersService($rootScope, _, $sessionStorage, $localStorage, corbelDriver, corbel, config) {

    // sessionStorage by default
    var storage = $sessionStorage;

    var services = {
      login: login,
      logout: logout,
      signup: signup,
      getMe: getMe,
      isLogged: isLogged,
      isLoggedSync: isLoggedSync,
      isEmailAvailable: isEmailAvailable,
      setToken: setToken,
      update: update,
      confirm: confirm
    };

    return services;

    function _resetAll() {
      $localStorage.$reset();
      $sessionStorage.$reset();
      storage = $sessionStorage;
    }

    function login(username, password, persistent) {

      _resetAll();

      if (persistent) {
        storage = $localStorage;
      }
      return corbelDriver.iam.token().create({
        claims: {
          'basic_auth.username': username,
          'basic_auth.password': password
        }
      }).then(function(response) {
        storage.token = response.data;
        return getMe(true);
      }).then(function(user) {
        $rootScope.$broadcast('login', user);
        return user;
      });
    }

    function _regenerateToken() {
      _resetAll();
      return corbelDriver.iam.token().create();
    }

    function logout() {
      $rootScope.$broadcast('logout');
      return corbelDriver.iam.user('me').signOut()
        .then(_regenerateToken)
        .catch(_regenerateToken);
    }

    function signup(email, firstName, password) {
      return corbelDriver.iam.users().create({
        firstName: firstName,
        lastName: '',
        email: email,
        username: email,
        password: password,
        scopes: config.get('corbel.userScopes').split(' ')
      });
    }

    /**
     * returns user data
     * @param  {boolean} force Forces app to request data
     * @return {Promise}       Promise that resolves with user data
     */
    function getMe(force) {
      if (force) {
        return corbelDriver.iam.user('me').get().then(function(response) {
          storage.user = response.data;
          return response.data;
        });
      } else {
        return storage.user ? Promise.resolve(storage.user) : Promise.reject();
      }
    }

    /**
     * Returns whenever user is logged in or not
     * Checks if there is a persisted session and config corbelDriver with it
     * @param  {boolean}  force Forces backend request check
     * @return {Promise}        A promise that resolves if the user is logged. Otherwise, rejects 
     */
    function isLogged(force) {
      if ($localStorage.token) {
        storage = $localStorage;
      }
      if (storage.token) {
        corbelDriver.config.set(corbel.Iam.IAM_TOKEN, storage.token);
      }

      return getMe(force);
    }

    /**
     * Returns whenever user is logged in or not
     * @return {Boolean} true if the user is logged. Otherwise, false 
     */
    function isLoggedSync() {
      if ($localStorage.token) {
        storage = $localStorage;
      }
      if (storage.token) {
        corbelDriver.config.set(corbel.Iam.IAM_TOKEN, storage.token);
      }

      return storage.user;
    }

    /**
     * Checks if an email is available or not
     * @param  {string}   email
     * @return {Promise}  A promise that resolves if the email is available, otherwise rejects
     */
    function isEmailAvailable(email) {
      return corbelDriver.iam.email().availability(email);
    }

    /**
     * Sets the token object value
     * @param {object} token
     * @param {string} token.accessToken
     * @param {number} token.expiresAt
     * @param {string} token.refreshToken
     */
    function setToken(token) {
      if ($localStorage.token) {
        storage = $localStorage;
      }
      storage.token = token;
    }

    /**
     * Updates user info
     * @param  {Object} user
     * @param  {string} user.email
     * @param  {string} user.username
     * @param  {string} user.password
     * @param  {string} user.firstName
     * @param  {string} user.lastName
     * @param  {Object} user.properties
     * @return {Promise}
     */
    function update(user) {
      return corbelDriver.iam.user('me').update(user).then(function() {
        user = _.omit(user, 'password');
        angular.merge(storage.user, user);
        $rootScope.$broadcast('user:change', storage.user);
      });
    }

    /**
     * Checks user password for logged users, useful for password required actions
     * @param  {string} password
     * @return {Promise}
     */
    function confirm(password) {
      return getMe().then(function(user) {
        // Do not override current user token
        return corbelDriver.clone().iam.token().create({
          claims: {
            'basic_auth.username': user.username,
            'basic_auth.password': password
          }
        }).then(function(response) {
          storage.token = response.data;
          return user;
        });
      });
    }

  }

})();
