/**
 * Created by krzysztofderek on 25.07.14.
 */

define(['angular'], function (angular) {
    'use strict';

    angular.module('ProductListService', [])
        .service('ProductListService', [ function () {

            var listOfProducts = [
                    {id: 0, name: "Speakout Intermediate", part1: "Speakout", part2: "Intermediate", image: "images/speakout_intermediate.png", ticked: false, completedUnits: 0, numberOfUnits: 2},
                    {id: 1, name: "Market Leader", part1: "Market Leader", part2: "Intermediate", image: "images/market_leader.png", ticked: false, completedUnits: 0, numberOfUnits: 2},
                    {id: 2, name: "Total English", part1: "Total English", part2: "Intermediate", image: "images/total_english.png", ticked: false, completedUnits: 0, numberOfUnits: 2}
                ],

                getListOfProducts = function () {
                    return JSON.parse(localStorage.getItem("listOfProducts"));
                },

                getProduct = function (product) {
                    var list = JSON.parse(localStorage.getItem("listOfProducts"));
                    return list[product]
                },


                changeTick = function (product) {
                    listOfProducts.forEach(function (element) {
                        if (element.id !== product.id) {
                            element.ticked = false;
                        }
                        else {
                            element.ticked = !element.ticked;
                        }
                    });
                },

                resetTick = function () {
                    listOfProducts.forEach(function (element) {
                        element.ticked = false;
                    });
                },

                getTick = function (product) {
                    return listOfProducts[product.id].ticked;
                };

            if (localStorage["listOfProducts"] == null) {
                localStorage["listOfProducts"] = JSON.stringify(listOfProducts);
            }

            return {
                getListOfProducts: getListOfProducts,
                getProduct: getProduct,
                changeTick: changeTick,
                resetTick: resetTick,
                get ticked() {
                    return getTick;
                }
            };
        }]);
});