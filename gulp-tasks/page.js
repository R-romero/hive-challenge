const gulp = require('gulp')

function pageDist() {
  return gulp
  .src("./app/index.html")
  .pipe(gulp.dest("./dist"))  
}

module.exports = {
  build: pageDist
}