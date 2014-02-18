module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['index.html', 'static/**/*.html', ],
                tasks: []
            },
            js: {
                files: ['js/**/*.js', 'test/**/*.js'],
                tasks: ['jshint', 'karma:unit:run']
            }
        },

        karma: {
            test: {
                configFile: 'tests/config.js',
                singleRun: true,
                browsers: ['PhantomJS']
            },
            unit: {
                configFile: 'tests/config.js',
                background: true,
                browsers: ['Chrome']
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
        },

        jshint: {
            options: {
                browser: true,
                globals: {
                    requirejs: true,
                    console: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('run', [
        'jshint',
        'connect',
        'karma:unit',
        'watch'
    ]);
    grunt.registerTask('test', ['jshint', 'karma:test']);
    grunt.registerTask('default', ['run']);    

};
