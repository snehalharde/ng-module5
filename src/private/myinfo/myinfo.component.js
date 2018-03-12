(function(){
"use strict";

angular.module('private')
.component('profileInfo',{
  templateUrl: 'src/private/myinfo/profile.html',
  bindings : {
    request: '<',
    menuitems:'<'
  }
})
})();