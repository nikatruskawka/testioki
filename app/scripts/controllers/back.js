define(['angular'], function (angular) {
    'use strict';

    angular.module('BackCtrl', [])
        .controller('BackController', ['DeviceService', 'TasksContentService', 'CheckingService', 'LocationService', '$location',
            function (DeviceService,TasksContentService,CheckingService, LocationService, $location) {

            this.tasksContent = TasksContentService;
            this.checking = CheckingService;
            this.location = LocationService;

            this.goBack = function(){

                switch($location.path()){
                    case "/game":
                        this.location.isTutorial();
                        $location.path("/menu");
                        break;
                    case "/toc":
                        $location.path("/game");
                        break;
                    case "/task":
                        LocationService.openModal("toc");
                        break;
                    case "/definition":
                        $location.path("/task");
                        break;
                    case "/summary":
                        $location.path("/toc");
                        break;
                }
            };

            this.isIOS = DeviceService.isIOS();
            this.isIPad = DeviceService.isIPad();
        }]);
});