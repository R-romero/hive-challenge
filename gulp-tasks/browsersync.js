// packages
const browsersync = require("browser-sync").create();

// BrowserSync
function init(done) {
  browsersync.init({
    server: {
      baseDir: "./app/"
    },
    files: [
      "./app/css/styles.css",
      "./app/js/index.js",
      "./app/**/*.{html, xml}"
    ],
    port: 3000,
    open: false
  });
  done();
}

// BrowserSync Reload
function reload(done) {
  browsersync.reload();
  done();
}

// exports
module.exports = {
  init: init,
  reload: reload
};