exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'e2e/pages/*.js',
    'e2e/**/*.js'
  ],
  suites: {
  	all: 'e2e/pages/*.js',
    landing: 'e2e/spec/landing/**/*.js',
    portfolio: 'e2e/spec/portfolio/**/*.js'
  },
  multiCapabilities: [{
    browserName: 'chrome'
  }]
};
