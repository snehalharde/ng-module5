(function () {

"use strict";

angular.module('private')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', '$filter'];

function SignupController(MenuService,$filter) {
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
  	 
     
  	 
  	  
  		
   
  	  }

  
  signupCtrl.upper= function(shortname){
  	var upCase = $filter('uppercase');
  	signupCtrl.shortname = upCase(signupCtrl.shortname);
  	
  }

  signupCtrl.validateShortName = function(shortname){
  	var upCaseOfShortName = signupCtrl.upper(signupCtrl.shortname);
  	
  	var promise = MenuService.getMenuItems(signupCtrl.shortname);
  	
  	var result = promise.then(function(response){
  		console.log("response :",response.menu_items)

  		var shortnameLength= response.menu_items.length;
  		console.log(shortnameLength)

  		if(shortnameLength != 0){
  			signupCtrl.register = true;
         var customer = MenuService.addItem(signupCtrl.firstname, signupCtrl.lastname, signupCtrl.email, signupCtrl.phone, signupCtrl.shortname);
      console.log(customer)
     

  		}else{
  			signupCtrl.error = true;
  		}
  		return result;//response.menu_items;
  	})
  	
  }


}

})();
