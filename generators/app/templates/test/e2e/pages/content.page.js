'use strict';

var ContentPage = function() {

  this.get = function() {
    browser.get('#/');
  };

  this.isPresent = function() {
    return element(by.css('.content-page')).isPresent();
  };

  this.waitForPresent = function() {
    return browser.wait(function() {
      return this.isPresent();
    }.bind(this), 2000);
  };

};

module.exports = ContentPage;
