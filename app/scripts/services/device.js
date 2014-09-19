/**
 * Created by bema on 08/08/14.
 */
define(['angular'], function (angular) {
    'use strict';

    angular.module('DeviceService', [])
        .service('DeviceService', ['$window', function ($window) {


            this.isIOS = function(){

                var iDevice = ['iPad', 'iPhone', 'iPod', 'MacIntel', 'iPhone Simulator', 'iPad Simulator'];

                return iDevice.indexOf($window.navigator.platform) > -1;
            };

            this.isIPad = function() {

                var iDevice = ['iPad', 'iPad Simulator'];

                return iDevice.indexOf($window.navigator.platform) > -1;
            }
        }]);
});