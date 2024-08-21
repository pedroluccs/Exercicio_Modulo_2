module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        concurrent: {
            target: ['less','uglify']
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/script.min.js': 'src/scripts/script.js'
                }
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concurrent']);
}