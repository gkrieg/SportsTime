var SportsTimeApp = angular.module('SportsTimeApp',['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider


    .state('home', {
        url: '/home',
        templateUrl: 'index.html',
        controller: 'HomeCtrl'
    })
    .state('profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
    })
    //keep copying until you are at the end.
    ;

    $urlRouterProvider.otherwise('home');
});
