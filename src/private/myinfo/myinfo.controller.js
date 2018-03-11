(function() {

  "use strict";

  angular.module('private')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['customerInfo'];
  function InfoController(customerInfo){
      var infoCtrl = this ;
      infoCtrl.customerInfo = customerInfo;
      console.log(customerInfo)
     infoCtrl.getMenuItems = function(){
      console.log("")
     }

  }
})();