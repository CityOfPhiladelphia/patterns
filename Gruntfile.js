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
           ['bower_components/filament-tablesaw/dist/stackonly/tablesaw.stackonly.js',
           'bower_components/nprogress/nprogress.js',
           'js/src/patterns.js'
         ]
       }
     }
   },
    watch: {
      js: {
        files: ['js/src/*.js'],
        tasks: ['uglify']
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'watch']);

};
