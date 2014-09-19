define(['angular'], function (angular) {
    'use strict';

    angular.module('TutorialCtrl', [])

        .controller('TutorialController', ["$location", function ($location) {

            this.disableTutorial = function () {
                localStorage.setItem("disable", "tutorial");
                $location.path("/menu");
            };
        }]);

});