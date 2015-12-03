(function() {
  'use strict';

  /* global: localStorage */
  /* jshint forin: false */

  /**
   * session-transfer Module
   *
   * Transfer session data to other tabs
   * http://blog.guya.net/2015/06/12/sharing-sessionstorage-between-tabs-for-secure-multi-tab-authentication/
   * http://stackoverflow.com/questions/20325763/browser-sessionstorage-share-between-tabs
   */
  angular.module('app.session-transfer', []).run(init);

  function init(usersService, corbelDriver) {

    // transfers sessionStorage from one tab to another
    var sessionStorageTransfer = function(event) {

      if (!event) {
        event = window.event;
      } // ie suq
      if (!event.newValue) {
        // do nothing if no value to work with
        return;
      }
      if (event.key === 'getSessionStorage') {
        // another tab asked for the sessionStorage -> send it
        localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
        // the other tab should now have it, so we're done with it.
        setTimeout(function() {
          localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.
        });
      } else if (event.key === 'sessionStorage' && !sessionStorage.length) {
        // another tab sent data <- get it
        var data = JSON.parse(event.newValue);
        for (var key in data) {
          sessionStorage.setItem(key, data[key]);
        }
      }
    };

    // listen for changes to localStorage
    if (window.addEventListener) {
      window.addEventListener('storage', sessionStorageTransfer, false);
    } else {
      window.attachEvent('onstorage', sessionStorageTransfer);
    }

  }
})();
