// http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
module.exports = function(grunt) {

  require('time-grunt')(grunt);

  var path = require('path');

  // handy for debugging with grunt log + inspect
  var util = require('util');

  // Lodash + Underscore String.
  // will not be included with Grunt v0.5+
  var _ = require('lodash/dist/lodash.underscore');
  _.str  = require('underscore.string');
  _.mixin(_.str.exports());
  grunt.util._ = grunt.util._ || _;

  // grab an absolute path for project path
  var projectPath = process.cwd();

  // some network ports.
  // specifiable in environment config or command line.
  var port  = grunt.option('port') ||
              process.env.PORT    ||
              8000;

  var liveReloadPort  = grunt.option('livereload-port') ||
                        process.env.LIVERELOAD_PORT     ||
                        35729;

  var build = grunt.option('dev') && 'dev' ||
              grunt.option('build') ||
              'prod';

  // http://firstandthird.github.io/load-grunt-config/
  require('load-grunt-config')(grunt, {
    // point to our directory
    configPath: path.join(projectPath, 'grunt', 'conf'),
    // other initialization options here.
    config: {
      pkg: grunt.file.readJSON('package.json'),
      build: build,
      path: path,
      env: process.env,
      port: port,
      liveReloadPort: liveReloadPort
    },
    // grunt.initConfig
    init: true,
    // https://github.com/sindresorhus/load-grunt-tasks
    loadGruntTasks: true
  });

  // custom tasks can be defined here.
  grunt.loadTasks('grunt/tasks');

  // default behavior.
  grunt.registerTask('default', 'Grunt.', function() {
    grunt.log.ok(grunt.config('pkg.name'));
    grunt.task.run(['main', 'serve']);
  });


}
