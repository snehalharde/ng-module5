(function(){
"use strict";

angular.module('private')
.component('profileInfo',{
  templateUrl: 'src/private/myinfo/myinfo.html',
  bindings : {
    myInfo: '<'
  }
})
})();