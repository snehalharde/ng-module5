(function() {

  "use strict";

  angular.module('private')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['customerInfo','MenuService'];
  function InfoController(customerInfo,MenuService){
      var infoCtrl = this ;
      infoCtrl.customerInfo = customerInfo;
      
          
  }
})();