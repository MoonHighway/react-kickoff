module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                additionalSuffixes: ['.js']
            },
            all: [
                '*.js',
                'views/*.js'
            ]
        },
        browserify: {
            options: {
                browserifyOptions: {
                    debug: true
                },
                transform: ['reactify']
            },
            client: {
                src: [
                    'views/*.js',
                    'app-client.js'
                ],
                dest: 'dist/js/main.js'
            }
        },
        less: {
            production: {
                options: {
                    paths: ["less"],
                    cleancss: true
                },
                files: {
                    "dist/css/style.css": ["less/*.less"]
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    'views/*.js',
                    'app-client.js'
                ],
                tasks: ['browserify'],
                options: {
                    spawn: true
                }
            },
            css: {
                files: ["less/*.less"],
                tasks: ["less"],
                options: {
                    spawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-jsxhint");
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('build', ['less', 'browserify']);
    grunt.registerTask('default', ['hint', 'build']);

};