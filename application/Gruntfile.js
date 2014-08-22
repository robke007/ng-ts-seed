module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        html2js: {
            options: {
                module: 'ad.bootstrap.templates'
            },
            main: {
                src: ['src/**/*.html'],
                dest: 'src/ad-ui-templates.js'
            }
        },
        concat: {
            options: {
                separator: '\r\n'
            },
            javascript: {
                src: ['bower_components/angular-bootstrap/ui-bootstrap.min.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    'src/**/*.js'],
                dest: 'build/ad-ui-bootstrap.js'
            },
            styles: {
                src: ['bower_components/bootstrap/dist/css/bootstrap.css','src/ad-ui-bootstrap.css', 'src/fonts/glyphicons.css', 'src/fonts/appIcons.css'],
                dest: 'build/ad-ui-bootstrap.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/ad-ui-bootstrap.js',
                dest: 'build/ad-ui-bootstrap.min.js'
            }
        },
        copy: {
            loadGlyphicons: {
                files: [
                    {expand: true, cwd: 'bower_components/bootstrap/dist/fonts/', src: '*', dest: 'build/fonts/'}
                ]
            },
            loadDependencies: {
                files: [
                    {expand: true, cwd: '../../ad-ui-utils/trunk/build', src: '**', dest: 'node_modules/ad-ui-utils/build/'},
                    {expand: true, cwd: '../../ad-ws-repair/trunk/build', src: '**', dest: 'node_modules/ad-ws-repair/build/'},
                    {expand: true, cwd: '../../ad-ui-repair/trunk/build', src: '**', dest: 'node_modules/ad.ui.repair/build/'},
                    {expand: true, cwd: '../../ad-ui-ymme/trunk/build', src: '**', dest: 'node_modules/ad.ui.ymme/build/'}
                ]
            }
        },
        less: {
            development: {
                options: {
                    paths: ["build"]
                },
                files: {
                    "src/ad-ui-bootstrap.css": "src/**/*.less"
                }
            }
        },
        clean: {
            build: {
                src: ["build/"]
            },
            generatedFiles: {
                src: ["src/ad-ui-templates.js", "src/ad-ui-bootstrap.css"]
            },
            iis: {
                src: ["C:\\IIS Sites\\LivingStyleGuide"]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('build', ['clean:build','less','html2js','concat', 'uglify']);
    grunt.registerTask('loadDependencies', ['copy:loadDependencies']);
};