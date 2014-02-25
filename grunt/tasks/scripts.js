module.exports = function(grunt) {

  var util = require('util');

  grunt.registerTask('scripts',
    'Copy scripts.',
    function() {

      var tasks = [
        // copied to build
        'copy:devScripts',
        'diffCopy:scripts',
        'clean:scripts'
      ];

      grunt.task.run(tasks);
    });

};
