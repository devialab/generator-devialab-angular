'use strict';

var ContentPage = require(process.cwd() + '/test/e2e/pages/content.page.js');
var LoginPage = require(process.cwd() + '/test/e2e/pages/login.page.js');

describe('In login page', function() {

  it('can login as test user', function() {

    var content = new ContentPage();
    var login = new LoginPage();

    login.get();
    login.loginAsTestUser();

    content.waitForPresent();

    expect(browser.getLocationAbsUrl()).toBe('/content');

  });

});
