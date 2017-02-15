module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'views/css/',
          src: '**',
          dest: './dest/views/css/'
        }, {
          expand: true,
          cwd: 'views/images/',
          src: 'pizzeria.jpg',
          dest: './dest/views/images/'
        }, {
          expand: true,
          cwd: 'views/js/',
          src: 'resources.js',
          dest: './dest/views/js/'
        }],
      },
    },

    image: {
      static: {
        files: {
          //dest <- source
          './dest/img/2048.png': 'img/2048.png',
          './dest/img/cam_be_like.jpg': 'img/cam_be_like.jpg',
          './dest/img/mobilewebdev.jpg': 'img/mobilewebdev.jpg',
          './dest/img/profilepic.jpg': 'img/profilepic.jpg',
          './dest/views/images/pizza.png': 'views/images/pizza.png',
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: {

          //dest <- source
          './dest/index.html': 'index.html',
          './dest/project-2048.html': 'project-2048.html',
          './dest/project-mobile.html': 'project-mobile.html',
          './dest/project-webperf.html': 'project-webperf.html',
          './dest/views/pizza.html': 'views/pizza.html'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          //dest <- source
          //'./dest/css/style.css': ['css/style.css'],
          //'./dest/css/print.css': ['css/print.css']
        }
      }
    },

    uglify: {
      options: {
        mangle: true
      },

      my_target: {

        //dest <- source
        files: {
          './dest/js/perfmatters.js': ['js/perfmatters.js'],
          './dest/views/js/main.js': ['views/js/main.js']
        }
      }
    },

  });

  //load module and register grunt task
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-image');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['copy', 'image', 'htmlmin', 'cssmin', 'uglify']);
};