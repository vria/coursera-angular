(function () {
    "use strict";
    
    angular.module('public').controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['SignUpStorage'];
    function SignUpController(SignUpStorage) {
        var signUpCtrl = this;

        signUpCtrl.signUpData = SignUpStorage.get();

        signUpCtrl.signUp = function (form) {
            if (form.$valid) {
                SignUpStorage.save(signUpCtrl.signUpData);
                signUpCtrl.saved = true;
            }
        };

        signUpCtrl.clearSignUp = function () {
            SignUpStorage.clear();
            signUpCtrl.signUpData = null;
            signUpCtrl.saved = false;
        }
    }

})();
