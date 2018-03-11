(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      
      return response.data;
    });
  };
var customers =[];
  service.addItem = function(firstname, lastname, email, phone, shortname){
    
    var customer ={
      'firstname':firstname,
        'lastname':lastname,
        'email': email,
        'phone': phone,
        'shortname': shortname

    }
    customers.push(customer);
  }

   service.getItems = function () {
     // body
      return customers;
        }  
        
   
    // service.favMenu = function(shortname){
    //   var favParams={
    //     "shortname":shortname
    //   }
    //   return $http.get(ApiPath + '/menu_items.json',params).then(function (response) {
    //     console.log("favmenu : :",response.data)
    //   return response.data;
    // });
    // }

}



})();
