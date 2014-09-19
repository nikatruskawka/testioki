define(['angular'], function (angular) {
    'use strict';

    angular.module('MediaService', [])
        .service('MediaService', ["DeviceService", function (DeviceService) {

            this.playSound = function (sound) {

                var src = "/android_asset/www/" + sound;

                if (DeviceService.isIOS()) {
                    src = sound;
                }

                var my_media = new Media(src);
                my_media.play();
            };

        }]);

});
