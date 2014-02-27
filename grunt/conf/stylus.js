module.exports = function(grunt) {
  // yay node path util
  var path = require('path');

  // set up in gruntfile before load-grunt-config
  var build = grunt.config('build');
  var _ = grunt.util._;

  // define stylus plugins.

  // https://github.com/jenius/autoprefixer-stylus
  // https://github.com/ai/autoprefixer
  function autoprefixer() {
    return require('autoprefixer-stylus')('last 2 versions', 'ie 8', 'ie 9');
  }

  // https://github.com/sapegin/csso-stylus
  // http://css.github.io/csso/
  function csso() {
    if( build !== 'dev') {
      return require('csso-stylus')({restructure: true});
    } else {
      return _.identity;
    }
  }

  return {
    compile: {
      options: {
        'include css': true,
        define: {
          build: build,
        },
        use: [
          autoprefixer,
          csso
        ]
      },
      files: [{
        expand: true,
        cwd: '<%= paths.src %>/styles/lib',
        src: [
          '**/*.styl',
          // ignore files & folders
          // prefixed with _
          '!**/_*',
          '!**/_*/**'
        ],
        dest: '<%= paths.build %>/styles/',
        // ext grabs everything after first period. bad Grunt!
        //ext: '.css',
        // manually replace with rename.
        rename: function(dest, src) {
          return path.join(dest, src.replace(/\.styl$/, '.css'));
        }
      }]
    }
  };
};
