(function(){
    "use strict";
    
    angular.module("ShoppingListCheckOff", [])
        .run(['$rootScope', 'ShoppingListCheckOffService', function ($rootScope, ShoppingListCheckOffService) {
            $rootScope.reInit = function () {
                ShoppingListCheckOffService.reInit();
            }
        }])
        .service('ShoppingListCheckOffService', function () {
            var toBuyList = [
                    {quantity: 10, name: 'cookies' },
                    {quantity: 2, name: 'melons' },
                    {quantity: 3, name: 'chocolate' },
                    {quantity: 1, name: 'cheese' },
                    {quantity: 2, name: 'whiskey' }
                ],
                alreadyBoughtList = [];

            this.getToBuyList = function () {
                return toBuyList;
            };

            this.getAlreadyBoughtList = function () {
                return alreadyBoughtList;
            };

            this.buy = function (item) {
                toBuyList.splice(toBuyList.indexOf(item), 1);
                alreadyBoughtList.push(item);
            };
        })
        .controller("ToBuyShoppingController", ['$scope', 'ShoppingListCheckOffService', function ($scope, ShoppingListCheckOffService) {
            var vm = this;

            vm.toBuyList = ShoppingListCheckOffService.getToBuyList();
            vm.buy = function (item) {
                ShoppingListCheckOffService.buy(item);
            };
        }])
        .controller("AlreadyBoughtShoppingController", ['$scope', 'ShoppingListCheckOffService', function ($scope, ShoppingListCheckOffService) {
            var vm = this;
            
            vm.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBoughtList();
        }]);
})();
