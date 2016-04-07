var generators = require('yeoman-generator');
var glob = require('glob');
var _ = require('lodash');

module.exports = generators.Base.extend({

  initializing: {

    init: function() {
      this.params = this.params || {};
      this.params._ = _;
    }

  },

  prompting: {

    moduleName: function() {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'moduleName',
        message: 'Your module name in camelCase',
        default: 'moduleName'
      }, function(answers) {
        this.params.moduleName = answers.moduleName;
        done();
      }.bind(this));
    },

    description: function() {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'description',
        message: 'Your module description',
        default: ''
      }, function(answers) {
        this.params.description = answers.description;
        done();
      }.bind(this));
    }

  },

  configuring: {},

  default: {},

  writing: {

    /**
     * Write all templates files (*.tpl) using `prompting` params phase
     */
    writeTemplates: function() {
      glob(this.templatePath('**/*.tpl'), function(er, files) {

        files.forEach(function(file) {

          var src = file.split('module/templates/');
          src = src[1];

          var dest = 'app/modules/' + this.params.moduleName + '/';

          this.fs.copyTpl(
            this.templatePath(src),
            this.destinationPath(dest + src.replace('.tpl', '').replace('module', this.params.moduleName)),
            this.params
          );

        }.bind(this));

      }.bind(this));

    }

  },

  conflicts: {},

  install: {},

  end: {}

});
