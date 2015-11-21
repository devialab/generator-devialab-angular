var generators = require('yeoman-generator'),
    glob = require('glob');

module.exports = generators.Base.extend({

  initializing: {

    init: function() {
      this.params = this.params || {};
    }

  },

  prompting: {

    appName: function() {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'appName',
        message: 'Your project name',
        default: this.appname
      }, function(answers) {
        this.params.appName = answers.appName;
        done();
      }.bind(this));
    },

    description: function() {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'description',
        message: 'Your project description',
        default: 'Project description'
      }, function(answers) {
        this.params.description = answers.description;
        done();
      }.bind(this));
    },

    tags: function() {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'tags',
        message: 'Your project tags',
        default: this.params.appName + ', angular, corbel, devialab'
      }, function(answers) {
        this.params.tags = answers.tags;
        done();
      }.bind(this));
    },

    corbelDomain: function() {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'domain',
        message: 'corbel.io domain',
        default: this.params.appName
      }, function(answers) {
        this.params.domain = answers.domain;
        done();
      }.bind(this));
    },

    corbelClientId: function() {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'clientId',
        message: 'corbel.io clientId',
        default: 'clientId'
      }, function(answers) {
        this.params.clientId = answers.clientId;
        done();
      }.bind(this));
    },

    corbelClientSecret: function() {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'clientSecret',
        message: 'corbel.io clientSecret',
        default: 'clientSecret'
      }, function(answers) {
        this.params.clientSecret = answers.clientSecret;
        done();
      }.bind(this));
    }

  },

  configuring: {

  },

  default: {

  },

  writing: {

    /**
     * Write all templates files (*.tpl) using `prompting` params phase
     */
    writeTemplates: function() {
      glob(this.templatePath('**/*.tpl'), function (er, files) {
        
        files.forEach(function(file) {

          var src = file.split('app/templates/');
          src = src[1];

          this.fs.copyTpl(
            this.templatePath(src),
            this.destinationPath(src.replace('.tpl', '')),
            this.params
          );

        }.bind(this));
      
      }.bind(this));

    },

    /**
     * Copy all normal files to target folder
     */
    copyScaffolding: function() {

      var ncp = require('ncp').ncp;

      ncp.limit = 16;
      var done = this.async();
      ncp(this.sourceRoot(), this.destinationRoot(), {
        filter: function(fileName) {
          return fileName && fileName.endsWith && !fileName.endsWith('.tpl');
        }
      }, function(err) {
        if (err) {
          return console.error(err);
        }
        console.log('done!');
        done();
      });

    }

  },

  conflicts: {

  },

  install: {

    npm: function() {
      this.npmInstall();
    },

    bower: function() {
      this.bowerInstall();
    }

  },

  end: {

  }

});
