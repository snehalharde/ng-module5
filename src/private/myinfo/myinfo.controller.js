(function() {
  "use strict";
  var module = angular.module("private");
  module.controller("InfoController", InfoController);

  InfoController.$inject = ['info','MenuService'];
  function InfoController(info,MenuService)
  {
      var infoCtrl = this ;
      infoCtrl.info = info;
      console.log(info)
      // console.log(profileInformation);
      if(profileInformation)
      {
          $ctrl.profileInformation = profileInformation;
          // console.log(profileInformation);
          MenuService.getMenuItem($ctrl.profileInformation.menuId).then(function(response){
          $ctrl.profileInformation.menuItem = response.data;
        });
      }

  }
})();