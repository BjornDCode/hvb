let mix = require('laravel-mix');

mix.js('assets/js/app.js', 'assets/')
   .sass('assets/sass/main.scss', 'assets/')
   .setPublicPath('assets')
   .options({
        processCssUrls: false,
   });

