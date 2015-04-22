var gulp = require('gulp'),
	nodemon = require('gulp-nodemon');

gulp.task('default', function() {
	nodemon({
		script: 'app.js',
		ext: 'js',
		env: {
			PORT: 1974
		},
		ignore: ['./node_modules/8**']
	})

	.on('restart', function() {
		console.log('You mad bro Im restarting the server on PORT: ' + port);
	});
});

