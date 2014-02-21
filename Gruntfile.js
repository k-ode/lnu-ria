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
            },
            css: {
                files: ['static/assets/css/main.css']
            }
        },

        karma: {
            test: {
                configFile: 'test/config.js',
                singleRun: true,
                browsers: ['PhantomJS']
            },
            unit: {
                configFile: 'test/config.js',
                background: true,
                browsers: ['Chrome']
            }
        },

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
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

    // Only run jshint on changed files
    var changedFiles = Object.create(null);
    var onChange = grunt.util._.debounce(function() {
        grunt.config('jshint.all.src', Object.keys(changedFiles));
        changedFiles = Object.create(null);
    }, 200);
    grunt.event.on('watch', function(action, filepath) {
        changedFiles[filepath] = action;
        onChange();
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('run', [
        //'jshint',
        'connect',
        //'karma:unit',
        'watch'
    ]);
    grunt.registerTask('test', ['jshint', 'karma:test']);
    grunt.registerTask('default', ['run']);    

};
