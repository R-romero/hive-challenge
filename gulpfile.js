// Load plugins
const gulp = require("gulp");

// import tasks
const server = require("./gulp-tasks/browsersync.js");
const css = require("./gulp-tasks/styles.js");

// Watch files
function watchFiles() {
  gulp.watch("./app/scss/**/*", css.build);
}

// define tasks
const watch = gulp.parallel(watchFiles, server.init);

// expose tasks to CLI
exports.watch = watch;
exports.default = watch;