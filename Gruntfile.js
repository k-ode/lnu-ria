module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'gh-pages': {
            options: {
                base: '.'
            },
            src: '**/*'
        }
    });

    grunt.loadNpmTasks('grunt-gh-pages');

    // Default task(s).
    grunt.registerTask('default', ['gh-pages']);

};
