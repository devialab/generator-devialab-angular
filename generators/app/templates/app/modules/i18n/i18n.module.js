(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app
   * @description i18n module
   */
  angular.module('app').config(configure).run(init);

  /* @ngInject */
  function configure($translateProvider, defaultLang) {

    $translateProvider.translations(defaultLang.name, defaultLang.values);

    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useStaticFilesLoader({
      'prefix': 'json/lang/',
      'suffix': '.json'
    });

    /**
     * FOUC - Flash of untranslated content
     * Force default language that is inyected in build time with grunt
     * https://github.com/angular-translate/angular-translate/issues/921
     */
    $translateProvider.preferredLanguage(defaultLang.name);

  }

  /* @ngInject */
  function init($log, i18n) {

  	i18n.getDefaultLang().then(i18n.setLang);

  }

})();
