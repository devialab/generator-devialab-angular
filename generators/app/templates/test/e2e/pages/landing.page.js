'use strict';

var LandingPage = function() {

  this.get = function() {
    browser.get('#/');
  };

  this.getTitle = function() {
    return browser.getTitle();
  };

};

module.exports = LandingPage;
