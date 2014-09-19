define(['angular'], function (angular) {
    'use strict';

    angular.module('AnimationService', [])
        .service('AnimationService', ["$timeout", function ($timeout) {

            var animation = false,
                animationStart = false,

                setAnimation = function () {
                    animationStart = true;
                    $timeout(function () {
                        if (animationStart) {
                            animation = true;
                        }
                    }, 1000);
                },

                resetAnimation = function () {
                    animationStart = false;
                    animation = false;
                };

            return {
                setAnimation: setAnimation,
                resetAnimation: resetAnimation,
                get animation() {
                    return animation;
                }
            }


        }]);

});
