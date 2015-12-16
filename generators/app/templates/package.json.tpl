{
  "name": "<%= appName %>",
  "version": "0.0.1",
  "author": {
    "name": "Devialab",
    "email": "hello@devialab.com",
    "url": "http://devialab.com/"
  },
  "repository": {
    "type": "git",
    "url": "git@bitbucket.org:devialab/<%= appName %>.git"
  },
  "license": "UNLICENSED",
  "private": true,
  "dependencies": {},
  "devDependencies": {
    "grunt": "0.4.5",
    "grunt-autoprefixer": "3.0.3",
    "grunt-cli": "0.1.13",
    "grunt-concurrent": "2.1.0",
    "grunt-contrib-clean": "0.7.0",
    "grunt-contrib-compass": "1.0.4",
    "grunt-contrib-concat": "0.5.1",
    "grunt-contrib-connect": "0.11.2",
    "grunt-contrib-copy": "0.8.2",
    "grunt-contrib-cssmin": "0.14.0",
    "grunt-contrib-htmlmin": "0.6.0",
    "grunt-contrib-imagemin": "1.0.0",
    "grunt-contrib-jshint": "0.11.3",
    "grunt-contrib-uglify": "0.11.0",
    "grunt-contrib-watch": "0.6.1",
    "grunt-filerev": "2.3.1",
    "grunt-google-cdn": "0.4.3",
    "grunt-include-source": "0.7.1",
    "grunt-karma": "0.12.1",
    "grunt-newer": "1.1.1",
    "grunt-ng-annotate": "1.0.1",
    "grunt-ng-constant": "1.1.0",
    "grunt-protractor-runner": "2.1.0",
    "grunt-release": "0.13.0",
    "grunt-svgmin": "3.1.0",
    "grunt-usemin": "3.1.1",
    "grunt-version-check": "0.3.1",
    "grunt-webtranslateit": "0.0.2",
    "grunt-wiredep": "2.0.0",
    "jasmine-core": "2.3.4",
    "jshint-stylish": "2.1.0",
    "karma": "0.13.15",
    "karma-chrome-launcher": "0.2.1",
    "karma-coverage": "0.5.3",
    "karma-jasmine": "0.3.6",
    "karma-phantomjs-launcher": "0.2.1",
    "karma-spec-reporter": "0.0.22",
    "load-grunt-tasks": "3.3.0",
    "phantomjs": "1.9.19",
    "serve-static": "1.10.0",
    "time-grunt": "1.2.2"
  },
  "engines": {
    "node": "~4.2.2"
  },
  "scripts": {
    "postinstall": "bower install --force-latest",
    "test": "grunt test",
    "start": "grunt serve",
    "clean": "rm -rf node_modules bower_components dist .sass-cache .tmp",
    "reinstall": "npm run clean && npm install && bower install",
    "reset": "npm run reinstall",
    "webdriver": "webdriver-manager start"
  }
}
