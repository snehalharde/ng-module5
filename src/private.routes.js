(function() {
'use strict';

angular.module('private')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    
    .state('private', {
      abstract: true,
      templateUrl: 'src/private/signup/private.html'
    })
   
    .state('private.signup', {
      url: '/signup',
       templateUrl: 'src/private/signup/signup.html',
       controller: 'SignupController as signupCtrl'
     
    })
    .state('private.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/private/myinfo/myinfo.html',
      controller: 'InfoController as infoCtrl',
       resolve: {
        customerInfo: ['MenuService', function (MenuService) {
          return MenuService.getItems();
        }]
      }
    });
    
}
})();
