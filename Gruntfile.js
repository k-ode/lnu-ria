module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'copy': {
            vendor: {
                files: [
                    // includes files within path and its sub-directories
                    { expand: true, cwd: 'bower_components/', src: ['backbone/backbone.js'], dest: 'vendor/' },
                    { expand: true, cwd: 'bower_components/', src: ['chai/chai.js'], dest: 'vendor/' },
                    { expand: true, cwd: 'bower_components/', src: ['jquery/jquery.js'], dest: 'vendor/' },
                    { expand: true, cwd: 'bower_components/', src: ['mocha/mocha.js'], dest: 'vendor/' },
                    { expand: true, cwd: 'bower_components/', src: ['mocha/mocha.css'], dest: 'vendor/' },
                    { expand: true, cwd: 'bower_components/', src: ['requirejs/require.js'], dest: 'vendor/' },
                    { expand: true, cwd: 'bower_components/', src: ['underscore/underscore.js'], dest: 'vendor/' },
                    { expand: true, cwd: 'bower_components/', src: ['requirejs-text/text.js'], dest: 'vendor/' }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['copy']);

};
