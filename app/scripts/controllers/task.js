define(['angular'], function (angular) {
    'use strict';

    angular.module('TaskCtrl', [])
        .controller('TaskController',
            ["CheckingService", "TasksContentService", "AnimationService", "$timeout", "$location",
                function (CheckingService, TasksContentService, AnimationService, $timeout, $location) {

                    this.tasksContent = TasksContentService;
                    this.checking = CheckingService;
                    this.animation = AnimationService;
                    this.tasksContent.answerMaxLength();

                    this.changeState = function () {
                        this.checking.setElementDone();
                        this.checking.increaseScore();
                        this.checking.checkedAnswer();
                        $timeout(function () {
                            CheckingService.cleanCurrentWord();
                            CheckingService.resetChosen();
                            CheckingService.resetCorrect();
                            CheckingService.resetChecked();
                            AnimationService.resetAnimation();
                            TasksContentService.changeState(TasksContentService.leftToDo);
                            TasksContentService.resetHighlighting();
                            TasksContentService.answerMaxLength();
                        }, 800);
                    };

                    // to force a delay on state / url change
                    this.goToSummary = function () {
                        $timeout(function () {
                            $location.path("/summary");
                        }, 800);

                        this.checking.setUnitCompleted();
                    };

                }]);
});


