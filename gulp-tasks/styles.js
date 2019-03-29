// packages
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
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