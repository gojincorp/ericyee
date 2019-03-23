module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    var configBridge = grunt.file.readJSON('./Resources/public/grunt/configBridge.json', { encoding: 'utf8' });

    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        
        // Task configuration
        less: {
            compileCore: {
                options: {
                  strictMath: true,
                  sourceMap: true,
                  outputSourceFiles: true,
                  sourceMapURL: '<%= pkg.name %>.css.map',
                  sourceMapFilename: 'Resources/Public/Css/<%= pkg.name %>.css.map'
                },
                src: 'Resources/Public/Less/eric_yee/eric_yee.less',
                dest: 'Resources/Public/Css/<%= pkg.name %>.css'
            }
        },
        watch: {
            styles: {
                files: ['Resources/Public/Less/**/*.less'], // which files to watch
                tasks: ['dist-css'],
                options: {
                    nospawn: true
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: configBridge.config.autoprefixerBrowsers
            },
            core: {
                options: {
                  map: true
                },
                src: 'Resources/Public/Css/<%= pkg.name %>.css'
            }
        }
        webpack: {
        	
        }
    });

    // CSS distribution task.
    grunt.registerTask('less-compile', ['less:compileCore']);
    grunt.registerTask('dist-css', ['less-compile', 'autoprefixer:core']);

    // Full distribution task.
    grunt.registerTask('dist', ['dist-css']);
    
    grunt.registerTask('default', ['dist-css', 'watch']);
};