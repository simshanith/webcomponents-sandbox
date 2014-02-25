module.exports = function(grunt) {

  var paths = require('./paths')(grunt);

  var path = require('path');
  //var util = require('util');

  var _ = grunt.util._;

  // Load custom Jade helpers module.
  var jadeLocalsPath = path.join(paths.project, paths.src, 'scripts', 'jade', 'helpers', 'jade_locals.js');
  jadeLocals = require(jadeLocalsPath)(grunt);

  jadeLocals.build = '<%= build %>';

  // Site-level paths.
  // Expose links editable in centralized JSON file.
  var jadePathsPath = path.join(paths.src, 'scripts', 'jade', 'helpers', 'paths.json');
  // Gather paths in Jade locals.
  jadeLocals.paths = _.extend({}, paths, grunt.file.readJSON(jadePathsPath));

  return {
    htdocs: {
      options: {
        pretty: true,
        data: jadeLocals
      }, 
      files: [{
        expand: true,
        cwd: '<%= paths.src %>/markup/htdocs/',
        src: '**/*.jade',
        dest: '<%= paths.build %>/markup/htdocs/',
        ext: '.html'
      }]
    }
  };
};
