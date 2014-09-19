/* Created by krzysztofderek on 11.08.14.
 */

define(['angular'], function (angular) {
    'use strict';

    angular.module('LocationService', [])
        .service('LocationService', ["ngDialog", "$state",
            function (ngDialog, $state) {
                var modalAppears,

                // ngDialog modal - openConfirm({...}).then(if confirmed(){}, if not(){})
                    openModal = function (destination) {
                        closeAllModals();
                        ngDialog.openConfirm({
                            template: 'views/goBackModal.html',
                            showClose: false,
                            closeByDocument: true
                        }).then(function () {
                            modalAppears = !modalAppears;
                            $state.go(destination);
                        }, function () {
                            modalAppears = !modalAppears;
                        });
                    },

                    isTutorial = function () {
                        $state.get()[2].name === "menu" ? $state.go("menu") : $state.go("app");
                    },

                    onBackKeyDown = function (event) {

                        switch ($state.current.name) {
                            case "app":
                            case "menu":
                                navigator.app.exitApp();
                                break;
                            case "game":
                                isTutorial();
                                break;
                            case "toc":
                                $state.go('game');
                                break;
                            case "task":
                                event.preventDefault();
                                if (modalAppears) {
                                    openModal('toc');
                                    modalAppears = !modalAppears;
                                }
                                else {
                                    closeAllModals();
                                    modalAppears = !modalAppears;
                                }
                                break;
                            case "definition":
                                $state.go('task');
                                break;
                            case "summary":
                                $state.go('toc');
                                break;
                        }
                    },

                    closeAllModals = function () {
                        ngDialog.closeAll();
                    };

                return {
                    openModal: openModal,
                    closeAllModals: closeAllModals,
                    onBackKeyDown: onBackKeyDown,
                    isTutorial: isTutorial
                };
            }
        ]);
});