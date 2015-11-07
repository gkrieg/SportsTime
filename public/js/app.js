var SportsTimeApp = angular.module('SportsTimeApp',['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider


    .state('profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
    })
    .state('home', {
        url: '/home',
        templateUrl: 'index.html',
        controller: 'HomeCtrl'
    })
    //keep copying until you are at the end.
    ;

    $urlRouterProvider.otherwise('home');
});
