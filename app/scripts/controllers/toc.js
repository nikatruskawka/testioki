define(['angular'], function (angular) {
    'use strict';

    angular.module('TocCtrl', [])
        .controller('TocController',
            ["ProductListService", "UnitListService", "TasksContentService", "CheckingService",
                function (ProductListService, UnitListService, TasksContentService, CheckingService) {

                    this.unitListService = UnitListService;
                    this.productListService = ProductListService;

                    this.productList = this.productListService.getListOfProducts();
                    this.unitList = this.unitListService.getListOfUnits();
                    this.productListService.resetTick();

                    this.tasksContent = TasksContentService;
                    this.checking = CheckingService;


                    this.setStartState = function (unit, product) {
                        this.checking.resetScore();
                        this.checking.cleanCurrentWord();
                        this.checking.resetChosen();
                        this.tasksContent.resetState();
                        this.checking.setCurrentUnit(unit);
                        this.checking.setCurrentProduct(product);
                    };

                }]);
});
