define([], function () {
    'use strict';


    var RouteManager = function ($stateProvider, TutorialProvider) {

        if (TutorialProvider.shouldOpenTutorial()) {
            $stateProvider.
                state('app', {
                    url: '',
                    views: {
                        'appview@': {
                            templateUrl: 'views/tutorial.html',
                            controller: 'TutorialController as TutorialCtrl'
                        }
                    }

                }).
                state('menu', {
                    url: '/menu',
                    views: {
                        'appview@': {
                            templateUrl: 'views/menu.html',
                            controller: 'MenuController as MenuCtrl'
                        }
                    }
                });
        } else {
            $stateProvider.
                state('app', {
                    url: '',
                    views: {
                        'appview@': {
                            templateUrl: 'views/menu.html',
                            controller: 'MenuController as MenuCtrl'
                        }
                    }
                });
        }

        $stateProvider.
            state('game', {
                url: '/game',
                views: {
                    'appview@': {
                        templateUrl: 'views/game.html',
                        controller: 'GameController as GameCtrl'
                    }
                }
            }).

            state('toc', {
                url: '/toc',
                views: {
                    'appview@': {
                        templateUrl: 'views/toc.html',
                        controller: 'TocController as TocCtrl'
                    }
                }
            }).

            state('definition', {
                url: '/definition',
                views: {
                    'appview@': {
                        templateUrl: 'views/definition.html',
                        controller: 'DefinitionController as DefinitionCtrl'
                    }
                }
            }).
            state('task', {
                url: '/task',
                views: {
                    'appview@': {
                        templateUrl: 'views/task.html',
                        controller: 'TaskController as TaskCtrl'
                    }
                }
            }).

            state('testioki', {
                url: '/testioki',
                views: {
                    'appview@': {
                        templateUrl: 'views/testioki.html',
                        controller: 'MasonryCtrl as MyApp'
                    }
                }
            }).

            state('summary', {
                url: '/summary',
                views: {
                    'appview@': {
                        templateUrl: 'views/summary.html',
                        controller: 'SummaryController as SummaryCtrl'
                    }
                }
            });

    };

    return ['$stateProvider', 'TutorialProviderProvider', RouteManager];
});
