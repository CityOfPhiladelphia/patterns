module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        sourceMap: true
      },
      pattern_js: {
        files: {
          'js/dist/patterns.min.js':
          [
            'bower_components/filament-tablesaw/dist/stackonly/tablesaw.stackonly.js',
            'js/src/patterns.js'
          ]
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',
          loadPath: [
            'bower_components/foundation-sites/scss',
            'bower_components/motion-ui/src'
          ],
          sourcemap: 'file'
        },
        files: {
          'css/patterns.css': '_scss/patterns/patterns.scss',
          'css/styleguide.css': '_scss/styleguide/styleguide.scss'
        }
      }
    },

    postcss: {
      options: {
        map: true,
          processors: [
            require('autoprefixer')({
              browsers: ['last 2 versions']
            })
          ]
        },
      dist: {
        src: 'css/*.css'
      }
    },

    watch: {
      js: {
        files: ['js/src/*.js'],
        tasks: ['uglify']
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'watch', 'scss']);

};
