(function(){
    "use strict";

    angular.module('data')
        .constant('ApiEndpoint', 'https://davids-restaurant.herokuapp.com/')
        .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http', 'ApiEndpoint'];
    function MenuDataService($http, ApiEndpoint) {
        return {
            getAllCategories: function () {
                return $http({
                    url: ApiEndpoint + 'categories.json'
                });
            },

            getItemsForCategory: function (categoryShortName) {
                return $http({
                    url: ApiEndpoint + 'menu_items.json',
                    params: {category: categoryShortName}
                });
            }
        }
    }
})();
