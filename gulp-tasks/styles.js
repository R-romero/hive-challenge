// packages
const gulp = require("gulp");
const sass = require("gulp-sass");

// CSS task
function stylesBuild() {
  return gulp
    .src("./app/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./app/css/"))
}

// exports
module.exports = {
  build: stylesBuild
};