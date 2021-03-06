

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['sites/default/files/css/tmp']
    },

    // Configuration to be run (and then tested).
    "comment-media-queries": {
      default_options: {
        files: {
          'sites/default/files/css/ie_footer.css': ['sites/default/files/css/footer.css']
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('default', ['clean', 'comment-media-queries']);
};

