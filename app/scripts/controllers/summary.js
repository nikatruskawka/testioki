define(['angular'], function (angular) {
    'use strict';

    angular.module('SummaryCtrl', [])
        .controller('SummaryController',
            ["TasksContentService", "CheckingService",
                function (TasksContentService, CheckingService) {

                    this.tasksContent = TasksContentService;
                    this.checking = CheckingService;

                    this.checking.showScoreImage();
                    this.checking.pointsCounter();

                    this.setStartState = function () {
                        this.tasksContent.resetState();
                        this.checking.resetScore();
                    };

                    this.setTryAgain = function () {
                        var unit = this.checking.getCurrentUnit(),
                            product = this.checking.getCurrentProduct();
                        this.checking.resetScore();
                        this.checking.cleanCurrentWord();
                        this.checking.resetChosen();
                        this.tasksContent.resetState();
                        this.checking.setCurrentUnit(unit);
                        this.checking.setCurrentProduct(product);
                    }
                }]);
});
