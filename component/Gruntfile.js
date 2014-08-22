module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            build: {
                src: ['src/**/*.ts'],
                out: 'build/<%= pkg.name %>.js',
                reference: 'src/reference.ts'
            }
        },
        html2js: {
            options: {
                module: '<%= pkg.name %>-templates'
            },
            main: {
                src: ['src/**/*.html'],
                dest: 'src/<%= pkg.name %>-templates.ts'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        less: {
            development: {
                files: {
                    "build/<%= pkg.name %>.css": "src/**/*.less"
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
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');

    // Default task(s).
    grunt.registerTask('build', ['clean:build','less','html2js', 'ts', 'uglify']);
};