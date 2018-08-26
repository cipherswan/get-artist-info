var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', ()=>{
    return gulp.src('app/scss/*.scss')
    .pipe(sass({includePaths: ['app/scss']}))
    .pipe(gulp.dest('app/css'))
})

gulp.task('default', ()=>{
    gulp.watch('app/scss/*.scss', gulp.series('sass'));
})