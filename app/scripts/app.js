/*jshint unused: vars */
define([
    'angular',
    'routeManager',

    'ionicAngular',

    'controllers/toc',
    'controllers/task',
    'controllers/definition',
    'controllers/game',
    'controllers/menu',
    'controllers/summary',
    'controllers/tutorial',
    'controllers/back',
    'controllers/testioki',

    'angular-ui-router',
    'angular-bootstrap',

    'services/productList',
    'services/unitList',
    'services/tasksContent',
    'services/checking',
    'services/contentFixture',
    'services/content',
    'services/tutorialProvider',
    'services/device',
    'services/locationService',
    'services/media',
    'services/animation'
],
    /*deps*/
    function (angular, RouteManager)/*invoke*/ {
        'use strict';

        return angular.module('connectApp', [
                'MenuCtrl',
                'GameCtrl',
                'TocCtrl',
                'TaskCtrl',
                'DefinitionCtrl',
                'SummaryCtrl',
                'TutorialCtrl',
                'BackCtrl',
                'MyApp',

                'TasksContentService',
                'ProductListService',
                'UnitListService',
                'CheckingService',
                'LocationService',
                'ContentFixture',
                'Content',
                'TutorialProvider',
                'DeviceService',
                'MediaService',
                'AnimationService',

                /*angJSDeps*/

                'ionic',
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngDialog',
                'ui.bootstrap',
                'ui.router',
                'angular-progress-arc',
                'Orbicular'
            ])

            .config(function ($compileProvider) {
                // Set the whitelist for certain URLs just to be safe
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
            })

            .config(RouteManager);
    });