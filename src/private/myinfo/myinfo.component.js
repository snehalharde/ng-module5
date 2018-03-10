(function(){
"use strict";

var module = angular.module("private");

module.component("profileInformation",{
  templateUrl:"src/private/myinfo/myinfo.html",
  bindings : {
    profileData:"<",
  },
})
})();