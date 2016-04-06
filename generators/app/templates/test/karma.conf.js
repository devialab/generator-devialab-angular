// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-10-22 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // PhantomJS Promise polifyll
      // http://stackoverflow.com/questions/29391111/karma-phantomjs-and-es6-promises
      // http://stackoverflow.com/questions/24224323/bind-polyfill-for-phantomjs
      'bower_components/bind-polyfill/index.js',
      // https://github.com/taylorhakes/promise-polyfill/pull/21
      'bower_components/promise-polyfill/promise.js',
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/jquery-bridget/jquery.bridget.js',
      'bower_components/seiyria-bootstrap-slider/js/bootstrap-slider.js',
      'bower_components/angular-bootstrap-slider/slider.js',
      'bower_components/corbel-js/dist/corbel.js',
      'bower_components/angular-corbel/dist/angular-corbel.js',
      'bower_components/angular-loading-bar/build/loading-bar.js',
      'bower_components/d3/d3.js',
      'bower_components/nvd3/build/nv.d3.js',
      'bower_components/angular-nvd3/dist/angular-nvd3.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/underscore/underscore.js',
      'bower_components/angular-underscore-module/angular-underscore-module.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
      'bower_components/ngstorage/ngStorage.js',
      'bower_components/select2/dist/js/select2.js',
      'bower_components/svg4everybody/dist/svg4everybody.js',
      'bower_components/promise-polyfill/Promise.js',
      'bower_components/waypoints/lib/noframework.waypoints.min.js',
      'bower_components/SHA-1/sha1.js',
      'bower_components/angulartics/src/angulartics.js',
      'bower_components/angulartics-google-analytics/dist/angulartics-google-analytics.min.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      // endbower
      'bower_components/angular-mocks/angular-mocks.js',
      '.tmp/*.js',
      'app/*.js',
      'app/modules/**/*.module.js',
      'app/modules/**/*.js',
      'app/*.module.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-coverage'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'

    reporters: ['spec']
  });
};
