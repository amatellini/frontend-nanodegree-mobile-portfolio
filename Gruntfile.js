module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      target: {
        files: {
          //dest <- source
          'css/style.min.css': ['css/style.css'],
          'css/print.min.css': ['css/print.css']
        }
      }
    },

  });

  //load module and register grunt task
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('build', ['cssmin']);
};