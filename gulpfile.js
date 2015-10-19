'use strict';

// Gulp modules.
var gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    csslint = require('gulp-csslint'),
    cssScss = require('gulp-css-scss'),
    eslint = require('gulp-eslint'),
    gulpif = require('gulp-if'),
    istanbul = require('gulp-istanbul'),
    livereload = require('gulp-livereload'),
    mocha = require('gulp-mocha'),
    minifyCSS = require('gulp-minify-css'),
    //ngAnnotate = require('gulp-ng-annotate'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify');

var rename = require('gulp-rename');
var through2 = require('through2');
var ngannotate = require('browserify-ngannotate');
var uglifyify = require('uglifyify');
var _ = require('lodash');

// Browserify Modules

var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');
var buffer = require('vinyl-buffer');
var runSeq = require('run-sequence');
var karma = require('karma').server;

// FilePaths
// ---------------------------------------------------------------
var clientDir = './client',
    serverDir = './server',
    buildDir = './public',
    buildFile = 'script.js',
    scriptFile = 'main.js';

// Browserify + Watchify
// ---------------------------------------------------------------
function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {

    var props = {
        entries: [clientDir + '/' + file],
        debug: true
        //,transform: [babelify, ngannotate, uglifyify]
        ,transform: [babelify]
    };

    // watchify() if watch requested, otherwise run browserify() once 
    var bundler = watch ? watchify(browserify(props)) : browserify(props);

    function rebundle() {
        var stream = bundler.bundle();
        return stream
            .on('error', handleErrors)
            .pipe(source(file))
            .pipe(rename(buildFile))
            .pipe(gulp.dest(buildDir + '/'));
    }

    //listen for an update and run rebundle
    
    bundler.on('update', function() {
        rebundle();
        gutil.log('Rebundle...');
    });
    
    return rebundle();
}

gulp.task('copy', function() {
    gulp.src(['./server/app/views/index.html', './server/app/views/favicon.ico'])
    .pipe(gulp.dest('./public'))
    })

// Gulp Tasks - CSS
// ---------------------------------------------------------------

gulp.task('buildCSS', function() {

    return gulp.src(clientDir+'/scss/main.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(csslint())
        .pipe(rename('style.css'))
        .pipe(gulp.dest(buildDir));
});

gulp.task('reloadCSS', function() {
    return gulp.src(buildDir + '/style.css').pipe(livereload());
});

gulp.task('convertCssToScss', function(){
    return gulp.src('./node_modules/animate.css/animate.css')
        .pipe(cssScss())
        .pipe(gulp.dest('./client/scss/shared/'))
    })
// Gulp Tasks - Client JS
// ---------------------------------------------------------------

gulp.task('lintJS', function() {

    return gulp.src([clientDir + '/**/*.js', serverDir +'/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());

});

gulp.task('buildJS', function() {
    return buildScript(scriptFile, true);
});

// Live reload business.
gulp.task('reload', function() {
    livereload.reload();
});

gulp.task('icons', function() { 
    return gulp.src([
        './node_modules/font-awesome/fonts/**.*',
        './node_modules/bootswatch-sass/bower_components/bootstrap-sass-official/assets/fonts/bootstrap/**/*'
        ]) 
        .pipe(gulp.dest(buildDir + '/fonts')); 
});


// Gulp Task - Default Behavior
// ----------------------------------------------------------------
gulp.task('default', function() {

    livereload.listen();
    gulp.start(['icons', 'copy', 'convertCssToScss', 'buildCSS', 'buildJS']);

    gulp.watch(
        [clientDir + '/**/*.js', serverDir+'/**/*.js', clientDir + '/**/*.html'],
        function() {
            runSeq('lintJS', 'buildJS', 'reload');
        }
    );

    gulp.watch(
        [clientDir + '/scss/**/*.scss', clientDir + '/**/*.scss'],
        function() {
            runSeq('buildCSS', 'reloadCSS')
        }
    );

    gulp.watch(
        [clientDir + '/**/*.html', serverDir+'/app/views/*.html'], ['reload']
    );


    // Run server tests when a server file or server test file changes.
    //gulp.watch(['tests/server/**/*.js'], ['testServerJS']);

    // Run browser testing when a browser test file changes.
    //gulp.watch('tests/browser/**/*', ['testBrowserJS']);

});
