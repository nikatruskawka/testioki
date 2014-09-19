define(['angular'], function (angular) {
    'use strict';

    angular.module('CheckingService', [])
        .service('CheckingService', ["TasksContentService", "UnitListService", "ProductListService", "AnimationService", "$timeout",
            function (TasksContentService, UnitListService, ProductListService, AnimationService, $timeout) {

            var isCorrect = false,
                isChosen = false,
                isChecked = false,
                chosenWord,
                definition,
                img,
                sound,
                currentWord = '',
                pointsCurrent = 0,
                points = 0,
                scoreImage = 0,
                progressBarScore = 0,
                progressBarTotal = TasksContentService.maxState,
                currentUnit = 0,
                currentProduct = 0,
                currentUnitName = '',

                setFeedbackValues = function (answer) {
                    isCorrect = answer.correct;
                    chosenWord = answer.name;
                    definition = answer.definition;
                    img = answer.img;
                    sound = answer.sound;
                },

                setHighlighting = function (answer) {
                    TasksContentService.resetHighlighting();
                    answer.isHighlighted = true;
                },

                chooseAnswer = function (answer) {
                    setFeedbackValues(answer);
                    currentWord = answer.name;
                    isChosen = true;
                    AnimationService.setAnimation();
                    setHighlighting(answer);
                },

                cleanCurrentWord = function () {
                    currentWord = '';
                },

                getFeedbackMessage = function () {
                    return {chosenWord: chosenWord, definition: definition, img: img, sound: sound};
                },

                setElementDone = function () {
                    if (isCorrect) {
                        TasksContentService.sentence.done = true;
                        TasksContentService.leftToDo--;
                        isChosen = false;
                        progressBarScore++;
                    }
                    else {
                        TasksContentService.sentence.firstAttempt = false;
                        isChosen = false;
                    }
                },

                increaseScore = function () {
                    if (isCorrect && TasksContentService.sentence.firstAttempt) {
                        points += 10;
                    }
                    else if (isCorrect) {
                        points += 5;
                    }
                },

                resetScore = function () {
                    points = 0;
                    progressBarScore = 0;
                    pointsCurrent = 0;
                },

                resetChosen = function () {
                    isChosen = false;
                },

                resetCorrect = function () {
                    isCorrect = false;
                },

                resetChecked = function () {
                    isChecked = false;
                },

                showScoreImage = function () {
                    if (points >= 90) {
                        scoreImage = 2;
                    } else {
                        if (points >= 60) {
                            scoreImage = 1;
                        } else {
                            scoreImage = 0;
                        }
                    }
                },

                checkedAnswer = function () {
                    isChecked = true;
                },

                setUnitCompleted = function () {
                    UnitListService.setUnitComplete(currentUnit, currentProduct, points);
                },

                setCurrentUnit = function (unit) {
                    currentUnit = unit.id;
                    currentUnitName = unit.name;
                },

                getCurrentUnit = function () {
                    return UnitListService.getUnit(currentUnit);
                },

                getCurrentProduct = function () {
                    return ProductListService.getProduct(currentProduct);
                },

                setCurrentProduct = function (product) {
                    currentProduct = product.id;
                },

                pointsCounter = function () {
                    $timeout(function () {
                        pointsCurrent += 1;
                        if (pointsCurrent < points) {
                            pointsCounter();
                        }
                    }, 10);
                }

            return {
                chooseAnswer: chooseAnswer,
                cleanCurrentWord: cleanCurrentWord,
                increaseScore: increaseScore,
                setElementDone: setElementDone,
                resetScore: resetScore,
                resetChosen: resetChosen,
                resetCorrect: resetCorrect,
                resetChecked: resetChecked,
                showScoreImage: showScoreImage,
                checkedAnswer: checkedAnswer,
                setUnitCompleted: setUnitCompleted,
                setCurrentUnit: setCurrentUnit,
                setCurrentProduct: setCurrentProduct,
                pointsCounter: pointsCounter,
                getCurrentUnit: getCurrentUnit,
                getCurrentProduct: getCurrentProduct,

                get isChosen() {
                    return isChosen;
                },
                get isCorrect() {
                    return isCorrect;
                },
                get currentWord() {
                    return currentWord;
                },
                get feedbackMessage() {
                    return getFeedbackMessage();
                },
                get points() {
                    return points;
                },
                get pointsCurrent() {
                    return pointsCurrent;
                },
                get scoreImage() {
                    return scoreImage;
                },
                get progressBarTotal() {
                    return progressBarTotal;
                },
                get progressBarScore() {
                    return progressBarScore;
                },
                get isChecked() {
                    return isChecked;
                },
                get currentUnitName() {
                    return currentUnitName;
                },
                get currentProduct() {
                    return currentProduct;
                }

            };

        }]);

});
