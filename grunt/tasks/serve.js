module.exports = function(grunt) {

  grunt.registerTask('serve', function() {

    grunt.task.run('concurrent:serve');

  });

  grunt.registerTask('server', 'serve');
  grunt.registerTask('concurrent:server', 'concurrent:serve');

};
