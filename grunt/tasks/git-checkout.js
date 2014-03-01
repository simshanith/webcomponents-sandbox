module.exports = function(grunt) {

  grunt.registerTask('git:checkout', 'Handle git branch change.', function() {
    grunt.log.error('Branch switch detected; aborting current grunt.');
    grunt.fatal('git:checkout');
  });

};
