const gulp = require("gulp");
sass = require("gulp-sass");
nodemon = require("gulp-nodemon");
cleanCSS = require("gulp-clean-css");
browserSync = require("browser-sync");
reload = browserSync.reload;
autoprefixer = require("gulp-autoprefixer");
$ = require("gulp-load-plugins")();
sassPaths = [
	"./node_modules/foundation-sites/scss",
	"./node_modules/motion-ui/src",
];

gulp.task("browser-sync", ["nodemon"], function () {
	browserSync({
		proxy: "localhost:3000",
		port: 5000,
		notify: false,
	});
});

gulp.task("nodemon", ["sass"], function (cb) {
	var called = false;
	return nodemon({
		script: "_app.js",
		ignore: ["gulpfile.js", "node_modules/"],
	})
		.on("start", function () {
			if (!called) {
				called = true;
				cb();
			}
		})
		.on("restart", function () {
			setTimeout(function () {
				reload({ stream: false });
			}, 200);
		});
});

gulp.task("sass", function () {
	return gulp
		.src("sass/app.scss")
		.pipe(
			$.sass({
				includePaths: sassPaths,
				outputStyle: "compressed",
			}).on("error", $.sass.logError)
		)
		.pipe(
			$.autoprefixer({
				browsers: ["last 4 versions", "ie >= 9"],
			})
		)
		.pipe(gulp.dest("public/css/"));
});

gulp.task("default", ["browser-sync"], function () {
	gulp.watch(
		["templates/views/*.pug", "sass/*.scss"],
		["browser-sync"],
		reload
	);
});
