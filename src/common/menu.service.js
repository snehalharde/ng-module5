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
      console.log("response.data ", config)
      return response.data;
    });
  };


  var customer = null;
  service.addItem = function(request,menuitems){
    customer = {};
    customer.menuitems= menuitems;
    customer.request = request;
   
  }

   service.getItems = function () {
     // body
      console.log(customer)
      return customer;
        }  
        
   service.getRequest= function() {
    
      return customer.request;
        }

        service.getMenuitems= function () {
          // body...
          return customer.menuitems;
        }

}



})();
