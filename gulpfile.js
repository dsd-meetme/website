var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync');
var connect = require('gulp-connect');


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
gulp.task('watch', function () {
    gulp.watch('assets/sass/**/*.sass', ['sass_compile']);
    gulp.watch('app/*/*/*/*.js', ['concat']);
});


gulp.task('dev', ['watch', 'broswer-sync', 'sass_compile']);

gulp.task('default', ['watch', 'broswer-sync', 'sass_compile'], function () {

});
