var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        // Removed "Spec" naming from files
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

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
        'angular': {'exports': 'angular'},
        'angular-cookies': ['angular'],
        'angular-sanitize': ['angular'],
        'angular-resource': ['angular'],
        'angular-ui-router': ['angular'],
        'angular-mocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
