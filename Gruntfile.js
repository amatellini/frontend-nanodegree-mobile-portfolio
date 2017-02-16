module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'views/css/',
          src: '**',
          dest: './docs/views/css/'
        }, {
          expand: true,
          cwd: 'views/images/',
          src: 'pizzeria.jpg',
          dest: './docs/views/images/'
        }, {
          expand: true,
          cwd: 'views/js/',
          src: 'resources.js',
          dest: './docs/views/js/'
        }],
      },
    },

    image: {
      static: {
        files: {
          //dest <- source
          './docs/img/2048.png': 'img/2048.png',
          './docs/img/cam_be_like.jpg': 'img/cam_be_like.jpg',
          './docs/img/mobilewebdev.jpg': 'img/mobilewebdev.jpg',
          './docs/img/profilepic.jpg': 'img/profilepic.jpg',
          './docs/views/images/pizza.png': 'views/images/pizza.png',
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
          './docs/index.html': 'index.html',
          './docs/project-2048.html': 'project-2048.html',
          './docs/project-mobile.html': 'project-mobile.html',
          './docs/project-webperf.html': 'project-webperf.html',
          './docs/views/pizza.html': 'views/pizza.html'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          //dest <- source
          //'./docs/css/style.css': ['css/style.css'],
          //'./docs/css/print.css': ['css/print.css']
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
          './docs/js/perfmatters.js': ['js/perfmatters.js'],
          './docs/views/js/main.js': ['views/js/main.js']
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