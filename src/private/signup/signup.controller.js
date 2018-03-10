(function () {

"use strict";

angular.module('private')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService','favMenu', '$filter','$element'];

function SignupController(MenuService,favMenu,$filter,$element) {
  var signupCtrl = this;
  signupCtrl.register;
  signupCtrl.error;
  signupCtrl.firstname="";
  signupCtrl.lastname ="";
  signupCtrl.email ="";
  signupCtrl.phone ="";
  signupCtrl.shortname = "";
  
  signupCtrl.submit = function(){
  	 var validateShortname = signupCtrl.validateShortName(signupCtrl.shortname);
  	 console.log(validateShortname)
  	 
  	var customer = MenuService.addItem(signupCtrl.firstname, signupCtrl.lastname, signupCtrl.email, signupCtrl.phone, signupCtrl.shortname);
  	  
  		var getcustomer = MenuService.getItems();
  	  console.log(getcustomer)
  	  }

  
  signupCtrl.upper= function(shortname){
  	var upCase = $filter('uppercase');
  	signupCtrl.shortname = upCase(signupCtrl.shortname);
  	
  }

  signupCtrl.validateShortName = function(shortname){
  	var upCaseOfShortName = signupCtrl.upper(signupCtrl.shortname);
  	
  	var compare = MenuService.getMenuItems(signupCtrl.shortname);
  	
  	var param = compare.then(function(response){
  		console.log("response :",response.menu_items)

  		var shortnameLength= response.menu_items.length;
  		console.log(shortnameLength)

  		if(shortnameLength != 0){
  			signupCtrl.register = true;
  		}else{
  			signupCtrl.error = true;
  		}
  		return response.menu_items;
  	})
  	
  }


}

})();
