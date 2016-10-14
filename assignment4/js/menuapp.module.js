(function(){
    "use strict";

    angular.module('MenuApp', ['ui.router', 'data'])
        .controller('categoriesController', categoriesController)
        .controller('itemsController', itemsController);

    function categoriesController(response) {
        this.categories = response.data;
    }
    
    function itemsController(response) {
        this.items = response.data.menu_items;
    }
})();
