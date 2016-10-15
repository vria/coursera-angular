(function(){
    "use strict";

    angular.module('MenuApp').controller('itemsController', itemsController);

    itemsController.$inject = ['response'];
    function itemsController(response) {
        this.items = response.data.menu_items;
    }

})();
