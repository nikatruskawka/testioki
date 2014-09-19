/**
 * Created by adrianwarkocz on 25.07.14.
 */
define(['angular'], function (angular) {
    'use strict';

    angular.module('MenuCtrl', [])
        .controller('MenuController', ["LocationService", "$state", function (LocationService, $state) {

// physical back-button handling on Menu screen causes some problems with $location.path() or ng-href
            this.goToGame = function () {
                $state.go("game");
            };

            document.addEventListener("backbutton", LocationService.onBackKeyDown, false);
        }]);
});