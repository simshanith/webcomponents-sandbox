module.exports = function(grunt) {
  // yay node path util
  var path = require('path');

  // set up in gruntfile before load-grunt-config
  var build = grunt.config('build');
  var _ = grunt.util._;


  var isDev = (build === 'dev');
  // define stylus plugins.
  // Hat tip to Artem Sapegin.
  // http://blog.sapegin.me/all/css-workflow

  // https://github.com/jenius/autoprefixer-stylus
  // https://github.com/ai/autoprefixer
  function autoprefixer() {
    return require('autoprefixer-stylus')('last 2 versions', 'ie 8', 'ie 9');
  }

  // https://github.com/sapegin/csso-stylus
  // http://css.github.io/csso/
  function csso() {
    if( !isDev ) {
      return require('csso-stylus')({restructure: true});
    } else {
      return _.identity;
    }
  }

  return {
    compile: {
      options: {
        // @import will inline include the .css,
        // instead outputting @import CSS literal
        'include css': true,
        // output comments with source line numbers
        linenos: isDev,
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
          var stylExtRegex = /\.styl$/;
          return path.join(dest, src.replace(stylExtRegex, '.css'));
        }
      }]
    }
  };
};
