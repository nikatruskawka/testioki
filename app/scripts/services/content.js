define(['angular'], function (angular) {
    'use strict';

    angular.module('Content', [])
        .service('Content', [ "ContentFixture", function (ContentFixture) {

            function contentGenerator(amount,name) {
                for (var count = 0; count < amount; count++) {
                    name.push({part1: '', part2: ''});
                    listOfAnswers.push([
                        {name: '', correct: true, definition: '', img: '', sound: ''},
                        {name: '', correct: false, definition: '', img: '', sound: ''},
                        {name: '', correct: false, definition: '', img: '', sound: ''},
                        {name: '', correct: false, definition: '', img: '', sound: ''}
                    ]);
                }
            }
            var fixtures = ContentFixture,
                listOfSentences = [
                    {part1: '', part2: ''}
                ],
                listOfAnswers = [
                    [
                        {name: '', correct: true, definition: '', img: '', sound: ''},
                        {name: '', correct: false, definition: '', img: '', sound: ''},
                        {name: '', correct: false, definition: '', img: '', sound: ''},
                        {name: '', correct: false, definition: '', img: '', sound: ''}
                    ]
                ],
                counter,
                getUnitByName = function (name) {
                    return fixtures[name];
                },
                setSentencesContent = function (name) {
                    counter = 0;
                    fixtures[name].forEach(function (element) {
                        listOfSentences[counter].part1 = element.sentence1;
                        listOfSentences[counter].part2 = element.sentence2;
                        counter++;
                    });
                },
                setAnswersContent = function (name) {
                    counter = 0;
                    fixtures[name].forEach(function (element) {
                        listOfAnswers[counter][0].name = element.vocitem;
                        listOfAnswers[counter][1].name = element.distractor1;
                        listOfAnswers[counter][2].name = element.distractor2;
                        listOfAnswers[counter][3].name = element.distractor3;
                        listOfAnswers[counter][0].img = element.vocimg;
                        listOfAnswers[counter][1].img = element.dis1img;
                        listOfAnswers[counter][2].img = element.dis2img;
                        listOfAnswers[counter][3].img = element.dis3img;
                        listOfAnswers[counter][0].sound = element.vocsound;
                        listOfAnswers[counter][1].sound = element.dis1sound;
                        listOfAnswers[counter][2].sound = element.dis2sound;
                        listOfAnswers[counter][3].sound = element.dis3sound;
                        listOfAnswers[counter][0].definition = element.vocdef;
                        listOfAnswers[counter][1].definition = element.dis1def;
                        listOfAnswers[counter][2].definition = element.dis2def;
                        listOfAnswers[counter][3].definition = element.dis3def;
                        counter++;
                    });
                };
            contentGenerator(9,listOfSentences);
            return {
                getUnitByName: getUnitByName,
                setSentencesContent: setSentencesContent,
                setAnswersContent: setAnswersContent,
                get listOfSentences() {
                    return listOfSentences;
                },
                get listOfAnswers() {
                    return listOfAnswers;
                }
            };

        }
        ])
    ;
})
;