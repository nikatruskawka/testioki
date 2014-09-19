/**
 * Created by krzysztofderek on 28.07.14.
 */

define(['angular'], function (angular) {
    'use strict';

    angular.module('UnitListService', [])
        .service('UnitListService', [ function () {


            var numberOfUnits = 0,

                listOfUnits = [
                    {id: 0, name: "Unit 1: Family", completed: 0, score: 0, product: "Speakout Intermediate"},
                    {id: 1, name: "Unit 2", completed: 0, score: 0, product: "Speakout Intermediate"},

                    {id: 2, name: "Unit 1", completed: 0, score: 0, product: "Market Leader"},
                    {id: 3, name: "Unit 2", completed: 0, score: 0, product: "Market Leader"},

                    {id: 4, name: "Unit 1", completed: 0, score: 0, product: "Total English"},
                    {id: 5, name: "Unit 2", completed: 0, score: 0, product: "Total English"}
                ],

                getListOfUnits = function () {
                    return JSON.parse(localStorage.getItem("listOfUnits"));
                },

                getUnit = function (unit) {
                    var list = JSON.parse(localStorage.getItem("listOfUnits"));
                    return list[unit];
                },

                setUnitComplete = function (unit, product, points) {

                    var completed = JSON.parse(localStorage.getItem("listOfProducts")),
                        list = JSON.parse(localStorage.getItem("listOfUnits"));

                    if ((completed[product]["completedUnits"] < completed[product]["numberOfUnits"])
                        && list[unit]["completed"] === 0) {
                        completed[product]["completedUnits"]++;
                    }

                    list[unit]["completed"] = 1;

                    // check if score is biggest ever
                    if (list[unit]["score"] < points) {
                        list[unit]["score"] = points;
                    }

                    localStorage["listOfProducts"] = JSON.stringify(completed);
                    localStorage["listOfUnits"] = JSON.stringify(list);
                };


            if (localStorage["listOfUnits"] == null) {
                localStorage["listOfUnits"] = JSON.stringify(listOfUnits);
            }

            return {
                getListOfUnits: getListOfUnits,
                setUnitComplete: setUnitComplete,
                getUnit: getUnit,
                get  numberOfUnits() {
                    return numberOfUnits;
                }
            };
        }]);
});