(function () {
    "use strict";

    angular.module('public').directive('menuItemCheck', menuItemCheckDirective);

    menuItemCheckDirective.$inject = ['MenuService'];
    function menuItemCheckDirective(MenuService) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$asyncValidators.menuItemCheck = function (modelValue, viewValue) {
                    var shortName = modelValue || viewValue;

                    return MenuService.getMenuItem(shortName);
                }
            }
        };
    }

})();
