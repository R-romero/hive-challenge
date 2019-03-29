// Load plugins
const gulp = require("gulp");

// import tasks
const server = require("./gulp-tasks/browsersync.js");

// define tasks
const watch = gulp.parallel(server.init);

// expose tasks to CLI
exports.watch = watch;
exports.default = watch;