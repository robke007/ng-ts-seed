module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            build: {
                src: ['src/**/*.ts'],
                out: 'build/scripts/<%= pkg.name %>.js',
                reference: 'src/reference.ts'
            }
        },
        html2js: {
            options: {
                module: '<%= pkg.name %>-templates'
            },
            main: {
                src: ['src/*/**/*.html'],
                dest: 'src/<%= pkg.name %>-templates.ts'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/scripts/<%= pkg.name %>.js',
                dest: 'build/scripts/<%= pkg.name %>.min.js'
            }
        },
        less: {
            development: {
                files: {
                    "build/css/<%= pkg.name %>.css": "src/**/*.less"
                }
            }
        },
        clean: {
            build: {
                src: ["build/"]
            },
            generatedFiles: {
                src: ["src/<%= pkg.name %>.js", "src/<%= pkg.name %>-templates.ts"]
            }
        },
        concat: {
            options: {
                separator: '\r\n'
            },
            libs: {
                src: [
                    "bower_components/jquery/dist/jquery.min.js",
                    "bower_components/angular/angular.min.js",
                    "bower_components/angular-animate/angular-animate.min.js",
                    "bower_components/angular-sanitize/angular-sanitize.min.js",
                    "bower_components/angular-ui-router/release/angular-ui-router.min.js",
                    "bower_components/angular-bootstrap/ui-bootstrap.min.js"
                ],
                dest: 'build/scripts/libs.js'
            },
            libStyles:{
                src:[
                    "bower_components/bootstrap/dist/css/bootstrap.min.css"
                ],
                dest: 'build/css/libStyles.css'
            }
        },
        copy: {
            assets: {
                files: [
                    {expand: true,  cwd: 'src', src: 'index.html', dest: 'build/'}
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ts');


    // Default task(s).
    grunt.registerTask('build', ['clean:build','concat','less','html2js', 'ts', 'uglify', 'copy:assets','clean:generatedFiles']);
};