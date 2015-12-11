(function() {
  'use strict';

  /**
   * app.i18n Service
   *
   * i18n service
   */
  angular.module('app').factory('i18n', i18n);

  /* @ngInject */
  function i18n($rootScope, $localStorage, $translate, defaultLang, usersService) {

    var services = {
      setLang: setLang,
      getDefaultLang: getDefaultLang
    };

    return services;

    /**
     * Sets language, saves it in localStorage and broadcast through $rootScope to others
     * @param {String} lang Language identificator
     */
    function setLang(lang) {
      lang = lang.split('-')[0];
      $localStorage.lang = lang;
      $translate.use(lang);
      $rootScope.$broadcast('lang:change', lang);
    }

    /**
     * Returns the default user -> browser -> app language (in that order)
     * @return {Promise} A promise that resolves with a `String` with the lang name
     */
    function getDefaultLang() {

      // app default lang
      var lang = defaultLang.name;

      // browser default lang
      if (navigator.userLanguage) {
        // Explorer
        lang = navigator.userLanguage;
      }
      if (navigator.language) {
        lang = navigator.language;
      }
      if (navigator.languages && navigator.languages.length) {
        lang = navigator.languages[0];
      }

      lang = lang.split('-')[0];

      // user default lang
      if ($localStorage.lang) {
        lang = $localStorage.lang;
      } else {
        return usersService.isLogged().then(function(user) {
          user.properties = user.properties || {};
          user.properties.lang = user.properties.lang || '';
          
          user.properties.lang = user.properties.lang.split('-')[0];
          return user.properties.lang ? user.properties.lang : lang;
        }).catch(function() {
          return lang;
        });
      }

      return Promise.resolve(lang);

    }

  }

})();
