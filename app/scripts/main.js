/*jshint unused: vars */
require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        sassbootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        'sass-bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
        'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-animate': '../bower_components/angular-animate/angular-animate',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        ngDialog: '../bower_components/ngDialog/js/ngDialog',
        'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        ionic: '../bower_components/ionic/release/js/ionic',
        ionicAngular: '../bower_components/ionic/release/js/ionic-angular',
        'ionic-angular': '../bower_components/ionic/release/js/ionic-angular',
        'angular-progress-arc': '../bower_components/angular-progress-arc/angular-progress-arc',
        orbicular: '../bower_components/orbicular/orbicular'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: [
                'angular'
            ],
            exports: 'angularUiRouter'
        },
        'angular-cookies': [
            'angular'
        ],
        'angular-animate': [
            'angular'
        ],
        'angular-progress-arc': [
            'angular'
        ],
        orbicular: [
            'angular'
        ],
        ngDialog: [
            'angular'
        ],
        'angular-sanitize': [
            'angular'
        ],
        ionic: {
            deps: [
                'angular'
            ]
        },
        ionicAngular: {
            deps: [
                'angular',
                'ionic',
                'angular-ui-router',
                'angular-sanitize'
            ]
        },
        'angular-resource': [
            'angular'
        ],
        'angular-mocks': {
            deps: [
                'angular'
            ],
            exports: 'angular.mock'
        },
        'angular-bootstrap': [
            'angular'
        ]
    },
    priority: [
        'angular',
        'ionic'
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'angular',
    'app',
    'angular-cookies',
    'angular-sanitize',
    'angular-resource',
    'angular-animate',
    'angular-ui-router',
    'ngDialog',
    'angular-bootstrap',
    'ionicAngular',
    'angular-progress-arc',
    'orbicular'
], function (angular, app) {
    'use strict';
    /* jshint ignore:start */
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    /* jshint ignore:end */
    angular.element().ready(function () {
        angular.resumeBootstrap([app.name]);
    });
});
