var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync');


//TODO fix this
gulp.task('broswer-sync', function () {
    sync.init(["assets/css/generated/*.css",
        "app/*/*/*/*.html",
        "*.html",
        "app/*/*/*.html",
        "app/dist/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['broswer-sync']);
