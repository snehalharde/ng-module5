(function () {
"use strict";

angular.module('private')
.component('signUp', {
  templateUrl: 'src/private/signup/signup.html',
  bindings: {
    signupCtrl: '=myResult'
  }
});



})();
