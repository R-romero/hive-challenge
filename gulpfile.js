// Load plugins
const gulp = require("gulp");

// import tasks
const img = require("./gulp-tasks/images.js");
const js = require("./gulp-tasks/scripts.js");
const server = require("./gulp-tasks/browsersync.js");
const css = require("./gulp-tasks/styles.js");
const clean = require("./gulp-tasks/clean.js");
const page = require("./gulp-tasks/page.js")

// Watch files
function watchFiles() {
  gulp.watch("./app/scss/**/*", css.build);
  gulp.watch("./app/js/**/*", scripts);
  gulp.watch("./app/img/**/*", images);
  gulp.watch("./app/index.html", page.build)
}

// define tasks
const scripts = gulp.series(js.lint, js.build);
const images = gulp.series(gulp.parallel(img.copy, img.resize));
const watch = gulp.parallel(watchFiles, server.init);
const build = gulp.series(
  clean.dist,
  gulp.parallel(css.build, images, scripts, page.build)
);

// expose tasks to CLI
exports.build = build;
exports.watch = watch;
exports.default = build;