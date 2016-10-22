(function () {
    "use strict";

    angular.module('public').controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['myInfo', 'favDish', 'ApiPath'];
    function MyInfoController(myInfo, favDish, ApiPath) {
        this.myInfo = myInfo;
        this.favDish = favDish;
        this.ApiPath = ApiPath;
    }
    
})();
