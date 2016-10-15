(function(){
    "use strict";

    angular.module('MenuApp').controller('categoriesController', categoriesController);

    categoriesController.$inject = ['response'];
    function categoriesController(response) {
        this.categories = response.data;
    }

})();
