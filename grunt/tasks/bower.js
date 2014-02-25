module.exports = function(grunt) {

  grunt.registerTask('bower', 'Copy files installed to `bower_components` to `src` `vendor` directories.', function() {
    grunt.task.run(['bower:install', 'copy:bower']);
  });

  grunt.registerTask('bower:install', 'Install Bower components reading `bower.json`.', function() {

    var exec = require('child_process').exec;
    var cb = this.async();
    exec('bower install', {cwd: process.cwd()}, function(err, stdout, stderr) {
        grunt.log.ok('Running `bower install`...');
        grunt.log.writelns(stdout);
        //grunt.log.errorlns(stderr);
        cb();
    });

  });

};
