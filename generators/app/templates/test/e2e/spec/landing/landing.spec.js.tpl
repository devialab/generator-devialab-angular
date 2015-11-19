'use strict';

var LandingPage = require(process.cwd() + '/test/e2e/pages/landing.page.js');

describe('Protractor Demo App', function() {

  it('should have a title', function() {

    var landing = new LandingPage();

    landing.get();

    expect(landing.getTitle()).toEqual('<%= appName %>');

  });

});
