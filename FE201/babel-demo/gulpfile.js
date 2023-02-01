// gulp-babel ref：https://www.npmjs.com/package/gulp-babel
// gulp-sass ref：https://www.npmjs.com/package/gulp-sass

const { src, dest, series, parallel } = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");

function compileJS() {
  return src("src/*.js")
    .pipe(babel())
    .pipe(dest("dist"))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest("dist"));
}

function compileCSS() {
  return src("src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("css"));
}

// 因為 compile JS CSS 互不干擾，所以可以讓他們平行的運作(Parallel)。
exports.default = parallel(compileCSS, compileJS);
