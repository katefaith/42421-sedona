"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var copy = require("gulp-copy");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))

    .pipe(server.reload({stream: true}));
});

gulp.task("images", function() {
  return gulp.src("img/**/*.{png,jpg,gif}")
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true
    }))
    .pipe(gulp.dest("build/img"));
});

gulp.task("symbols", function() {
  return gulp.src("img/**/*.svg")
  .pipe(svgmin())
  .pipe(svgstore({
    inlineSvg: true
  }))

  .pipe(rename("symbols.svg"))
  .pipe(gulp.dest("build/img"));
});


gulp.task("copies", function() {
  return gulp.src(["fonts/**/*.{woff,woff2}", "img/**/*.{jpg}", "js/**/*.js", "*.html"])
  .pipe(copy("build/"));
});


gulp.task("build", ["copies", "style", "images", "symbols"]);


gulp.task("serve", ["style"], function() {
  server.init({
    server: "./build",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("build/*.html").on("change", server.reload);
});
