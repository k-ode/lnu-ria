module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            'mocha-phantomjs': {
                command: 'mocha-phantomjs -R min http://localhost:8000/test/index.html',
                options: {
                    stdout: true,
                    stderr: true
                }
            },
        },
        // copy: {
        //     vendor: {
        //         files: [
        //             // includes files within path and its sub-directories
        //             { expand: true, cwd: 'bower_components/', src: ['backbone/backbone.js'], dest: 'vendor/' },
        //             { expand: true, cwd: 'bower_components/', src: ['chai/chai.js'], dest: 'vendor/' },
        //             { expand: true, cwd: 'bower_components/', src: ['jquery/jquery.js'], dest: 'vendor/' },
        //             { expand: true, cwd: 'bower_components/', src: ['mocha/mocha.js'], dest: 'vendor/' },
        //             { expand: true, cwd: 'bower_components/', src: ['mocha/mocha.css'], dest: 'vendor/' },
        //             { expand: true, cwd: 'bower_components/', src: ['requirejs/require.js'], dest: 'vendor/' },
        //             { expand: true, cwd: 'bower_components/', src: ['underscore/underscore.js'], dest: 'vendor/' },
        //             { expand: true, cwd: 'bower_components/', src: ['requirejs-text/text.js'], dest: 'vendor/' },
        //             { expand: true, cwd: 'bower_components/', src: ['when/when.js'], dest: 'vendor/' },
        //             { expand: true, flatten: 'true', cwd: 'bower_components/', src: ['normalize.scss/_normalize.scss'], dest: 'sass/vendor/' }
        //         ]
        //     }
        // },
        watch: {
            scripts: {
                files: ['js/**/*.js', 'test/**/*.js'],
                tasks: ['shell:mocha-phantomjs']
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './',
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['connect']);    

};
