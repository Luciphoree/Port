//  Переменные
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'); 
// конец переменных




// Задания

// Таск обрабатывающий файл SCSS и создающий другой файл, и папку style.css

// Создание функции с именем sass  конвертирующая SCSS в CSS
gulp.task('sass',function(){
    // Адрес до SCSS который нужно изменить
  return gulp.src('app/scss/**/*.scss')
    //обработка(трубы) через который проходит файл  
        // файл помещается в трубу для обработки
        // активирует конвертацию файла со значением: outputStyle: 'compressed', что значит кода будет минифицирован
        .pipe(sass({outputStyle: 'compressed'}))
        // 

        // Перемеименовывает файл в style.min.css 
        .pipe(rename({suffix : '.min'}))
        // 

        //Вендорные преффиксы ( кроссбраузерность) 
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        // 


        // после обработки файл помещается в указанное назначение 
        .pipe(gulp.dest('app/css'))  
        //  конец трубы для назначения файла

        // труба для автообновления страницы
        .pipe(browserSync.reload({stream: true}))
        //  
});

// Таск для объедения и сжатия CSS файлов
gulp.task('style', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/slick-carousel/slick/slick-theme.css',
        'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('app/css'))
  });
//   

// таск для объедения и сжатия JS файлов
gulp.task('script', function(){
  return gulp.src([  
      'node_modules/slick-carousel/slick/slick.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
});
// 


// отдельные задания для автообновления html и JS
gulp.task('html', function(){
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}))
});
// 

//  Подключения плагина для автообновления страницы
gulp.task('browser-sync', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "app/",
            index: "programms.html"
        }
    });
});
// 

// Задание для автообновления проета и других заданий
gulp.task('watch', function(){
  gulp.watch('app/scss/*.scss', gulp.parallel('sass'))
  gulp.watch('app/*.html', gulp.parallel('html'))
  gulp.watch('app/js/*.js', gulp.parallel('js'))
});
//  



//   
gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync'))