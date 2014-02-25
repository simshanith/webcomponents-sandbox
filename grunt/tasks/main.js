module.exports = function(grunt) {

  grunt.registerTask('main',
    'Compile markup, scripts, and styles from source.',
    ['symlink', 'bower', 'markup', 'scripts', 'styles', 'clean:build']);

};
