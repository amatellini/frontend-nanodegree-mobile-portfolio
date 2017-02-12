module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    image: {
      static: {
        files: {
          //dest <- source
          './dest/img/2048.png': 'img/2048.png',
          './dest/img/cam_be_like.jpg': 'img/cam_be_like.jpg',
          './dest/img/mobilewebdev.jpg': 'img/mobilewebdev.jpg',
          './dest/img/profilepic.jpg': 'img/profilepic.jpg'
        }
      }
    },

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
  grunt.loadNpmTasks('grunt-image');

  grunt.registerTask('build', ['cssmin', 'image']);
};