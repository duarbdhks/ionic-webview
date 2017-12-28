/*global requirejs, document, cordova, window, navigator, console */

requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery:'../lib/jquery/dist/jquery.min',
        angular:'../lib/angular/angular.min',
        angularAnimate:'../lib/angular-animate/angular-animate.min',
        angularSanitize:'../lib/angular-sanitize/angular-sanitize.min',
        uiRouter:'../lib/angular-ui-router/release/angular-ui-router.min',
        ionic:'../lib/ionic/js/ionic.min',
        ionicAngular:'../lib/ionic/js/ionic-angular.min',
        underscore: '../lib/underscore/underscore-min',
        ngCordova: '../lib/ngCordova/dist/ng-cordova',
        locastorage: '../lib/angular-local-storage/dist/angular-local-storage.min',
        angularMoment: '../lib/angular-moment/angular-moment.min',
        moment: '../lib/moment/moment',
        angularLocale:'../lib/ionic/js/angular-locale_ko',
    },
    shim: {
        angular : {deps: ['jquery', 'underscore'],exports : 'angular'},
        angularAnimate: {deps: ['angular']},
        angularSanitize: {deps: ['angular']},
        uiRouter: {deps: ['angular']},
        angularLocale: {deps: ['angular']},
        ngCordova : {deps: ['angular']},
        locastorage : {deps: ['angular']},
        angularMoment : {deps: ['angular']},
        ionic :  {deps: ['angular'], exports : 'ionic'},
        ionicAngular: {deps: ['angular', 'ionic', 'angularAnimate', 'angularSanitize']},
        underscore: {
            exports: '_'
        }
    },

    // 모듈 위치 URL뒤에 덧붙여질 쿼리를 설정한다.
    // 개발 환경에서는 브라우저 캐시를 회피하기 위해 사용할 수 있고,
    // 실제 서비스 환경이라면 ts값을 배포한 시간으로 설정하여 새로 캐시하게 할 수 있다.
    urlArgs : 'ts=' + (new Date()).getTime(),

    priority: [
        'jquery',
        'angular',
        'ionic'
    ],
    deps: [
        'bootstrap'
    ]
});