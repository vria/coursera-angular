(function () {
    "use strict";

    angular.module('public').service('SignUpStorage', SignUpStorage);

    SignUpStorage.$inject = ['$window'];
    function SignUpStorage($window) {

        this.save = function (signUpInfo) {
            $window.localStorage.setItem('sign-up-info', angular.toJson(signUpInfo));
        };

        this.get = function () {
            return angular.fromJson($window.localStorage.getItem('sign-up-info'));
        };

        this.clear = function () {
            return $window.localStorage.removeItem('sign-up-info');
        }
    }

})();
