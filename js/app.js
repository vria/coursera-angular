(function(){
    "use strict";

    angular.module("LunchCheckerApp", [])
        .controller("LunchCheckerCtrl", ['$scope', function ($scope) {

            $scope.checkLunch = function () {
                if ($scope.dishes) {
                    $scope.status = 'OK';

                    var dishesNumber = $scope.dishes.split(',').filter(function (dish) {
                        return dish.trim().length > 0;
                    }).length;

                    $scope.result = dishesNumber <= 3 ? "Enjoy!" : "Too much!";
                } else {
                    $scope.status = 'ERROR';
                    $scope.result = "Please enter data first";
                }
            }
        }]);
})();
