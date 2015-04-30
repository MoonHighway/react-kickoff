module.exports = function (grunt) {

    grunt.initConfig({

        //
        //  TODO: Add JSXHint and react-tools
        //

        //
        //  TODO: Add browserify and reactify
        //

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

            //
            //  TODO: Add A Watch for our client files
            //

            css: {
                files: ["less/*.less"],
                tasks: ["less"],
                options: {
                    spawn: true
                }
            }
        }
    });


    //
    // TODO: Load grunt-jsxhint
    //

    //
    //  TODO: Load grunt-browserify
    //

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    //
    //  TODO: Create a grunt hint task that runs jshint
    //

    //
    //  TODO: Add browserify to the grunt build task
    //

    grunt.registerTask('build', ['less']);

    //
    //  TODO: Add hinting to default grunt task
    //

    grunt.registerTask('default', ['build']);

};