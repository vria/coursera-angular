(function(){
    "use strict";
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;

        narrowItDown.doNarrow = function() {
            MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
            .then(function(foundItems) {
                narrowItDown.found = foundItems;
            });
        }

        narrowItDown.removeItem = function(index) {
            narrowItDown.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http.get(ApiBasePath + '/menu_items.json')
                .then(function(response) {
                    return response.data.menu_items.filter(function(menuItem) {
                        return menuItem.description.indexOf(searchTerm) >= 0;
                    });
                })
                .catch(function (error) {
                    console.error(error);
                })
        }
    }

    function foundItemsDirective() {
        return {
            restrict: 'A',
            templateUrl: 'templates/foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: function() {

            },
            controllerAs: 'foundItemsCtrl',
            bindToController: true
        };
    }

})();
