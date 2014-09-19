define(['angular'], function (angular) {
    'use strict';

    angular.module('TasksContentService', [])
        .service('TasksContentService', ["Content", function (Content) {

            Content.setSentencesContent("UNIT1");
            Content.setAnswersContent("UNIT1");

            var listOfAnswers = Content.listOfAnswers,
                listOfSentences = Content.listOfSentences,
                currentState = 0,
                maxState = listOfSentences.length,
                leftToDo = listOfSentences.length,
                gapSize = '',

                singleArrayShuffle = function (array) {
                    var counter = array.length,
                        tempArray,
                        randomIndex;

                    // While there are elements in the array
                    while (0 < counter) {
                        // Pick a random index
                        randomIndex = Math.floor(Math.random() * counter);

                        // Decrease counter by 1
                        counter--;

                        // And swap the last element with it
                        tempArray = array[counter];
                        array[counter] = array[randomIndex];
                        array[randomIndex] = tempArray;
                    }
                },

                doubleArrayShuffle = function (firstArray, secondArray) {
                    var counter = firstArray.length,
                        randomIndex,
                        tempFirstArray,
                        tempSecondArray;

                    while (0 < counter) {
                        randomIndex = Math.floor(Math.random() * counter);

                        counter--;

                        tempFirstArray = firstArray[counter];
                        tempSecondArray = secondArray[counter];
                        firstArray[counter] = firstArray[randomIndex];
                        secondArray[counter] = secondArray[randomIndex];
                        firstArray[randomIndex] = tempFirstArray;
                        secondArray[randomIndex] = tempSecondArray;
                    }
                },

                taskShuffle = function () {
                    var i = 0;

                    //answers' randomisation

                    for (i; i < maxState; i++) {
                        singleArrayShuffle(listOfAnswers[i]);
                    }

                    // tasks' randomisation

                    doubleArrayShuffle(listOfAnswers, listOfSentences);

                },

                resetState = function () {
                    listOfAnswers = Content.listOfAnswers;
                    listOfSentences = Content.listOfSentences;
                    taskShuffle();
                    currentState = 0;
                    maxState = listOfSentences.length;
                    leftToDo = listOfSentences.length;
                    init();
                },

                changeState = function (leftToDo) {
                    if (leftToDo !== 0) {
                        currentState = (currentState + 1) % maxState;
                        while (listOfSentences[currentState].done === true) {
                            currentState = (currentState + 1) % maxState;
                        }
                    }
                },

                answerMaxLength = function () {
                    var vocitem = listOfAnswers[currentState][0].name.length,
                        dist1 = listOfAnswers[currentState][1].name.length,
                        dist2 = listOfAnswers[currentState][2].name.length,
                        dist3 = listOfAnswers[currentState][3].name.length,
                        maxLength = Math.max(vocitem, dist1, dist2, dist3);
                    if (maxLength < 9) {
                        gapSize = 'tiny'
                    }
                    else if (maxLength < 11) {
                        gapSize = 'small'
                    }
                    else if (maxLength < 14) {
                        gapSize = 'medium'
                    }
                    else if (maxLength < 16) {
                        gapSize = 'big'
                    }
                    else {
                        gapSize = 'huge'
                    }
                },

                isSummary = function () {
                    return (leftToDo === 1)
                },

                resetHighlighting = function () {
                    listOfAnswers[currentState].forEach(function (element) {
                        element["isHighlighted"] = false;
                    });
                },

                resetDoneFlag = function () {
                    listOfSentences.forEach(function (element) {
                        element["done"] = false;
                    });
                },

                setAttempt = function () {
                    listOfSentences.forEach(function (element) {
                        element["firstAttempt"] = true;
                    });
                },

                init = function () {
                    setAttempt();
                    resetHighlighting();
                    resetDoneFlag();
                };

            init();

            return {
                resetState: resetState,
                isSummary: isSummary,
                resetHighlighting: resetHighlighting,
                changeState: changeState,
                answerMaxLength: answerMaxLength,
                get answers() {
                    return listOfAnswers[currentState] || false;
                },
                get sentence() {
                    return listOfSentences[currentState] || false;
                },
                get leftToDo() {
                    return leftToDo;
                },
                get gapSize() {
                    return gapSize;
                },
                get maxState() {
                    return maxState;
                },
                set leftToDo(left) {
                    leftToDo = leftToDo - 1;
                }
            };
        }])
})