'use strict';

module.exports = function(grunt) {

  var serveStatic = require('serve-static');

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var env = grunt.option('env') || 'int';
  var config = grunt.file.readJSON('app/json/config.' + env + '.json');

  // Configurable paths for the application
  var appConfig = {
    env: env,
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    test: 'test',
    // Change this to '0.0.0.0' to access the server from outside.
    hostname: '0.0.0.0',
    defaultLang: config.lang || 'en',
    ports: {
      server: grunt.option('serverPort') || 9000,
      test: grunt.option('testPort') || 9001,
      liveReload: grunt.option('liveReloadPort') || 35729
    }
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    appConfig: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= appConfig.app %>/{,**/}*.js'],
        tasks: ['newer:jshint:all', 'includeSource:server'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/**/*.js'],
        tasks: ['newer:jshint:test', 'karma:ci']
      },
      config: {
        files: ['<%= appConfig.app %>/json/config.*.json'],
        tasks: ['ngconstant']
      },
      lang: {
        files: ['<%= appConfig.app %>/json/lang/*.json'],
        tasks: ['ngconstant']
      },
      compass: {
        files: [
          '<%= appConfig.app %>/styles/**/*.{scss,sass}',
          '<%= appConfig.app %>/modules/*/styles/**/*.{scss,sass}'
        ],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      html: {
        files: ['<%= appConfig.app %>/*.html'],
        tasks: ['includeSource:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.tmp/*.html',
          '<%= appConfig.app %>/**/*.html',
          '<%= appConfig.app %>/**/*.json',
          '.tmp/styles/{,*/}*.css',
          '<%= appConfig.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: appConfig.ports.server,
        hostname: appConfig.hostname,
        livereload: appConfig.ports.liveReload
      },
      livereload: {
        options: {
          open: true,
          middleware: function(connect) {
            return [
              serveStatic('.tmp'),
              connect().use(
                '/bower_components',
                serveStatic('./bower_components')
              ),

              serveStatic(appConfig.app)
            ];
          }
        }
      },
      server: {
        options: {
          middleware: function(connect) {
            return [
              serveStatic('.tmp'),
              connect().use(
                '/bower_components',
                serveStatic('./bower_components')
              ),

              serveStatic(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: appConfig.ports.test,
          middleware: function(connect) {
            return [
              serveStatic('.tmp'),
              serveStatic('test'),
              connect().use(
                '/bower_components',
                serveStatic('./bower_components')
              ),

              serveStatic(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          middleware: function(connect) {
            return [
              serveStatic('.tmp'),
              serveStatic('dist')
            ];
          }
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= appConfig.app %>/{,**/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.sass-cache',
            '.tmp',
            '.coverage',
            '<%= appConfig.dist %>/{,*/}*',
            '!<%= appConfig.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp',
      test: ['.tmp', '.coverage']
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '**/*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      options: {
        //cwd: '<%= appConfig.app %>'
        exclude: [
          'bower_components/bootstrap/dist/js/bootstrap.js',
          'bower_components/svg4everybody/dist/svg4everybody.legacy.js',
          'bower_components/angulartics/src/angulartics-ga-cordova.js',
          'bower_components/angulartics/src/angulartics-gtm.js',
          'bower_components/angulartics/src/angulartics-clicky.js',
          'bower_components/angulartics/src/angulartics-cnzz.js',
          'bower_components/angulartics/src/angulartics-piwik.js',
          'bower_components/angulartics/src/angulartics-scroll.js',
          'bower_components/angulartics/src/angulartics-splunk.js',
          'bower_components/angulartics/src/angulartics-woopra.js',
          'bower_components/angulartics/src/angulartics-marketo.js',
          'bower_components/angulartics/src/angulartics-intercom.js',
          'bower_components/angulartics/src/angulartics-inspectlet.js',
          'bower_components/angulartics/src/angulartics-newrelic-insights.js'
        ]
      },
      app: {
        src: [
          '<%= appConfig.app %>/index.html',
          '<%= appConfig.app %>/statics/*.html'
        ],
        ignorePath: /\.\.\//
      },
      sass: {
        src: ['<%= appConfig.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      },
      test: {
        src: ['<%= appConfig.test %>/karma.conf.js'],
        ignorePath: '../'
      }
    },

    includeSource: {
      options: {
        basePath: ['<%= appConfig.app %>', '.tmp'],
        baseUrl: '',
      },
      server: {
        files: {
          '.tmp/index.html': '<%= appConfig.app %>/index.html'
        }
      },
      dist: {
        files: {
          '<%= appConfig.dist %>/index.html': '<%= appConfig.app %>/index.html'
        }
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= appConfig.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= appConfig.app %>/images',
        javascriptsDir: '<%= appConfig.app %>/scripts',
        fontsDir: '<%= appConfig.app %>/styles/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= appConfig.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    ngconstant: {
      options: {
        name: 'app.const',
        dest: '.tmp/app.const.js',
        wrap: '(function() { {%= __ngModule %} })();',
        constants: {
          CONFIG: grunt.file.readJSON('app/json/config.' + appConfig.env + '.json')
        }
      },
      build: {},
      defaultLang: {
        options: {
          name: 'app.defaultLang',
          dest: '.tmp/app.defaultLang.js',
          constants: {
            defaultLang: {
              name: appConfig.defaultLang,
              values: grunt.file.readJSON('app/json/lang/' + appConfig.defaultLang + '.json')
            }
          }
        }
      }
    },

    ngtemplates: {
      app: {
        cwd: 'dist',
        src: 'modules/**/*.html',
        dest: '.tmp/app.templates.js',
        options: {
          prefix: '/',
          bootstrap: function(module, script) {
            return '(function() { angular.module(\'' + module + '\').run([\'$templateCache\', function($templateCache) {' + script + '}]);\n})();';
          }
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= appConfig.dist %>/{,**/}*.js',
          '<%= appConfig.dist %>/styles/{,*/}*.css',
          '<%= appConfig.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= appConfig.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= appConfig.dist %>/index.html',
      options: {
        dest: '<%= appConfig.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= appConfig.dist %>/{,**/}*.html'],
      css: ['<%= appConfig.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= appConfig.dist %>', '<%= appConfig.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= appConfig.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    uglify: {
      templates: {
        files: {
          '.tmp/app.templates.js': ['.tmp/app.templates.js']
        }
      }
    },
    concat: {
      // Only one 'use strict'
      useStrict: {
        options: {
          banner: '\'use strict\';\n',
          process: function(src, filepath) {
            return '// Source: ' +
              filepath + '\n' +
              src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          }
        },
        src: ['.tmp/concat/scripts/scripts.js'],
        dest: '.tmp/concat/scripts/scripts.js'
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>/images',
          src: '**/*.{png,jpg,jpeg,gif}',
          dest: '<%= appConfig.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= appConfig.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= appConfig.dist %>',
          src: ['*.html', 'views/{,*/}*.html', 'modules/{,*/}*.html'],
          dest: '<%= appConfig.dist %>'
        }]
      }
    },

    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= appConfig.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= appConfig.app %>',
          dest: '<%= appConfig.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '.htpasswd',
            '*.html',
            'statics/{,*/}*.html',
            '!statics/{,*/}*.mock.html',
            'images/{,*/}*',
            'fonts/*',
            'json/lang/*',
            'modules/**',
            '!modules/*/*.js'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= appConfig.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
          dest: '<%= appConfig.dist %>'
        }, {
          expand: true,
          cwd: '.',
          src: 'bower.json',
          dest: '<%= appConfig.dist %>'
        }, {
          expand: true,
          cwd: 'bower_components/fontawesome/fonts',
          src: '*',
          dest: '<%= appConfig.dist %>/fonts'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= appConfig.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin'
        // @todo: fix *.svg files
        // 'svgmin'
      ]
    },

    // Test settings
    karma: {
      options: {
        configFile: 'test/karma.conf.js'
      },
      ci: {
        singleRun: true
      },
      coverage: {
        singleRun: true,
        reporters: ['spec', 'coverage'],
        preprocessors: {
          'app/**/*.js': 'coverage'
        },
        coverageReporter: {
          type: 'html',
          dir: '.coverage/'
        }
      },
      serve: {
        browsers: [
          'Chrome'
        ]
      }
    },

    protractor: {
      options: {
        configFile: 'test/protractor.conf.js',
        keepAlive: true,
        args: {
          baseUrl: 'http://' + appConfig.hostname + ':' + appConfig.ports.server
        }
      },
      run: {}
    },

    webtranslateit: {
      options: {
        projectToken: 'PUBLIC_KEY',
        langs: ['en', 'es']
      },
      local: {
        dest: 'app/json/lang'
      }
    },

    versioncheck: {
      options: {
        skip: ['angular', 'angular-mocks', 'angular-sanitize'],
        hideUpToDate: true
      },
      run: {}
    },

    release: {
      /* For more options: https://github.com/geddski/grunt-release#options */
      options: {
        additionalFiles: ['bower.json'],
        indentation: '\t', //default: '  ' (two spaces)
        commitMessage: 'Release v<%= version %>', //default: 'release <%= version %>'
        tagMessage: 'v<%= version %>', //default: 'Version <%= version %>',
        tagName: 'v<%= version %>',
        npm: false
      }
    }

  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'ngconstant',
      'includeSource:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('_test', [
    'versioncheck',
    'wiredep',
    'clean:test',
    'ngconstant',
    'concurrent:test',
    'autoprefixer',
    'connect:test'
  ]);

  grunt.registerTask('serve:test', [
    'clean:server',
    '_test',
    'karma:serve'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    '_test',
    'karma:ci'
  ]);

  grunt.registerTask('test:coverage', [
    'clean:server',
    '_test',
    'karma:coverage'
  ]);

  grunt.registerTask('test:e2e', [
    'clean:server',
    'wiredep',
    'ngconstant',
    'includeSource:server',
    'concurrent:server',
    'autoprefixer',
    'connect:server',
    // @todo: run selenium-server
    'protractor:run'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'ngconstant',
    'includeSource:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat:generated',
    'concat:useStrict',
    'ngAnnotate',
    'copy:dist',
    // 'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin',
    'ngtemplates',
    'uglify:templates',
    'generate:concat:templates',
    'concat:templates'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('generate:concat:templates', function() {
    console.log('filerev', grunt.filerev.summary["dist/scripts/scripts.js"]);

    grunt.config(['concat', 'templates'], {
      src: ['dist/scripts/scripts.*', '.tmp/app.templates.js'],
      dest: grunt.filerev.summary['dist/scripts/scripts.js']
    });
  });

  grunt.registerTask('locales', 'webtranslateit task alias', ['webtranslateit']);

};
