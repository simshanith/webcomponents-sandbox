module.exports = function(grunt) {

  var util = require('util');

  grunt.registerTask('markup',
    'Compile Jade to HTML.',
    function() {

      var tasks = [
        // copied to build
        'jade:htdocs',
        'copy:imports',
        'diffCopy:markup',
        'clean:markup'
      ];

      grunt.task.run(tasks);
    });

};
