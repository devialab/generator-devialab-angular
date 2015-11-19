'use strict';

var LoginPage = function() {

  var username = element(by.css('#content-main #login-form input[name="email"]'));
  var password = element(by.css('#content-main #login-form input[name="password"]'));
  // var remember = element(by.css('#content-main #login-form [name="remember"]'));
  var submitButton = element(by.css('#content-main #login-form button[type="submit"]'));

  this.get = function() {
    browser.get('#/login');
  };

  this.setUsername = function(value) {
    username.sendKeys(value);
  };

  this.setPassword = function(value) {
    password.sendKeys(value);
  };

  this.getUsername = function() {
    return username;
  };

  this.getPassword = function() {
    return password;
  };

  this.submit = function() {
    return submitButton.click();
  };

  this.loginAsTestUser = function() {
    this.setUsername('test@devialab.com');
    this.setPassword('test');
    return this.submit();
  };

};

module.exports = LoginPage;
