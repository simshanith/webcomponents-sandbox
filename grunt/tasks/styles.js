module.exports = function(grunt) {

  var util = require('util');

  grunt.registerTask('styles',
    'Compile Stylus to CSS',
    function() {
      
      var tasks = [
        'stylus:compile',
        'diffCopy:styles',
        'clean:styles'
      ];

      grunt.task.run(tasks);
    });

};
