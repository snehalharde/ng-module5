(function () {

"use strict";

angular.module('private')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', '$filter','$q','$element'];

function SignupController(MenuService,$filter,attrs,$q,$element) {
  var signupCtrl = this;
  signupCtrl.success = null;
  signupCtrl.error=null;
  signupCtrl.menuitems =null;
  
  
    signupCtrl.submit = function () {
       var newname = signupCtrl.upper(signupCtrl.request.shortname);
       
      var promise= MenuService.getMenuItems(newname);
      promise
      .then(function(response){
        console.log(" response " ,response)
            signupCtrl.menuitems = response.menu_items;
            console.log(response.menu_items)
            var add = MenuService.addItem(signupCtrl.request, signupCtrl.menuitems);
            console.log("signupCtrl.request :",signupCtrl.request)
            console.log("signupCtrl.menuitems :", signupCtrl.menuitems)
            signupCtrl.success = "You are signed up";
          
      }

      
     , function(response){
          signupCtrl.error = true;
      });
     
    }
  
  signupCtrl.upper= function(shortname){
  	var upCase = $filter('uppercase');
  	signupCtrl.shortname = upCase(signupCtrl.request.shortname);
  	return signupCtrl.shortname; 
  }
  
// signupCtrl.favitems = function(shortname){
//   return MenuService.getMenuItems(signupCtrl.shortname)
//   .then(function(response){
//     return response.menu_items;
//   });

// }

  signupCtrl.validateShortName = function(shortname,$q){
  	//var upCaseOfShortName = signupCtrl.upper(signupCtrl.shortname);  	
  	return MenuService.getMenuItems(signupCtrl.shortname)
    .then(function(response){
      console.log("shortname", response.menu_items);
      if(response.menu_items.length != 0){
        signupCtrl.register= true;
      }
      
      return true;
    })
    .catch(function(){
      signupCtrl.register = false;
      return $q.reject("Enter Data like L1,SP");
    });
  	
  	// var result = promise.then(function(response){
  	// 	console.log("response :",response.menu_items)
   //    menuitems.push(response.menu_items);
   //    console.log(menuitems)
  	// 	var shortnameLength= response.menu_items.length;
  	// 	console.log(shortnameLength)

  	// 	if(shortnameLength != 0){
   //      signupCtrl.register = true;
   //       var customer = MenuService.addItem(signupCtrl.firstname, signupCtrl.lastname, signupCtrl.email, signupCtrl.phone, signupCtrl.shortname);
   //    console.log("customer is " ,customer)
     

   //    }else{
   //      signupCtrl.register = false;
   //    }
  	// 	return menuitems;//response.menu_items;
  	// })

    
  	
  }


}

})();
