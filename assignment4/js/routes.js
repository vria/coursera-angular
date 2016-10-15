(function(){
    "use strict";

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    RoutesConfig = function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "templates/home.html"
            })
            .state('categories', {
                url: "/categories",
                templateUrl: "templates/categories.html",
                controller: 'categoriesController',
                controllerAs: 'categoriesCtrl',
                resolve: {
                    response: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: "/items/{categoryName}",
                templateUrl: "templates/items.html",
                controller: 'itemsController',
                controllerAs: 'itemsCtrl',
                resolve: {
                    response: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryName);
                    }]
                }
            });
    });

})();
