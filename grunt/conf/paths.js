module.exports = function(grunt) {
  var path = require('path');
  var paths = {};

  // absolute path to project directory
  paths.project = process.cwd();
  // ---
  // relative paths from project directory

  // where resources live
  paths.htdocs  = 'htdocs';
  // input
  paths.src     = 'src';
  // output
  paths.dest    = path.join(paths.htdocs, '_assets');
  // temporary build directory
  paths.build   = 'build';

  paths.baseUrl = '/';

  return paths;
};
