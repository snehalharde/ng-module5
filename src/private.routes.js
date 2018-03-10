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
    //  .state('private.home', {
    //   url: '/',
    //   templateUrl: 'src/public/home/home.html'
    // })
    .state('private.signup', {
      url: '/signup/{itemId}',
       templateUrl: 'src/private/signup/signup.html',
       controller: 'SignupController as signupCtrl',
      resolve:{
        favMenu:['$stateParams','MenuService', function($stateParams,MenuService){
          return MenuService.getMenuItems($stateParams.itemId);
        }]
      }
    })
    .state('private.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/private/myinfo/myinfo.html',
      controller: 'InfoController as infoCtrl',
       resolve: {
        info: ['MenuService', function (MenuService) {
          return MenuService.getItems();
        }]
      }
    })
    // .state('public.menuitems', {
    //   url: '/menu/{category}',
    //   templateUrl: 'src/public/menu-items/menu-items.html',
    //   controller: 'MenuItemsController',
    //   controllerAs: 'menuItemsCtrl',
    //   resolve: {
    //     menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
    //       return MenuService.getMenuItems($stateParams.category);
    //     }]
    //   }
    // });
}
})();
