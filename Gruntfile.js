module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		sass: {
			dev: {
				files: {
					'assets/css/app.css': 'public/assets/css/app.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'assets/css/app.css': 'public/assets/css/app.scss'
				}
			}

		},

		watch: {
			css: {
				files: [
					'app/assets/css/*.scss',
					'app/mods/**/*.scss',
					'app/mods/**/**/*.scss'
				],
				tasks: ['sass:dev']
			}
		},

		//requirejs optimization
		requirejs: {
			dist: {
				options: {
					baseUrl: "public",
					name: 'js/config',
					mainConfigFile: "public/js/config.js",
					optimize: 'uglify',
					out: 'public/js/config.min.js',
					findNestedDependencies: true,
					normalizeDirDefines: 'all',
					keepBuildDir: true
				}
			}
		}


	});



	/**
	 * DEPENDANCIES
	 */

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');



	/**
	 * DEFINE TASKS
	 */

	grunt.registerTask('default', ['dev']);
	grunt.registerTask('dev', ['watch']);

	grunt.registerTask('build', [
		'requirejs',
		'sass:dist'
	]);
};