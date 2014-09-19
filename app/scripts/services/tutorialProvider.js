/**
 * Created by annacieplicka on 08.08.14.
 */
define(['angular'], function (angular) {
    'use strict';

    angular.module('TutorialProvider', [])
        .provider('TutorialProvider', function () {

            this.shouldOpenTutorial = function () {

                var openTutorial = true;

                if (localStorage.getItem("user") === null || localStorage.getItem("disable") === null) {
                    localStorage.setItem("user", "name");
                } else {
                    openTutorial = false;
                }

                return openTutorial;
            };

            this.$get = function () {
                return function () {
                };
            };

        });
});