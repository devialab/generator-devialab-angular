(function() {

  'use strict';

  angular.module('app.config', ['app.const'])
    .provider('config', ['CONFIG', function(CONFIG) {

      var provider = this;

      provider.CFG = {};

      // Init with CONFIG
      angular.extend(provider.CFG, CONFIG);

      // Let provider to set aditional params
      provider.setConfig = function(config) {
        angular.extend(this.CFG, config);
      };

      /**
       * Retunrs config value
       * @param  {String} key           Config param name
       * @param  {Mixed} defaultValue   if undefined, it throws exception if key is
       *                                no present, otherwise, returns defaultValue
       * @return {Mixed}
       */
      provider.get = function(key, defaultValue) {
        if (this.CFG[key] === undefined && defaultValue === undefined) {
          throw new Error('config:undefined:' + key);
        }
        if (this.CFG[key] === undefined) {
          return defaultValue;
        }

        return this.CFG[key];
      };

      /**
       * Sets config parameter
       * @param {String} key
       * @param {Mixed} value
       */
      provider.set = function(key, value) {
        this.CFG[key] = value;
      };

      this.$get = function() {
        this.CFG = angular.extend({}, provider.CFG);
        this.get = provider.get;
        this.set = provider.set;
        return this;
      };

    }]);

})();
