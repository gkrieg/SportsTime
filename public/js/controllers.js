
var SportsTimeApp = angular.module('SportsTimeApp',[]);
SportsTimeApp.controller('SportsCntl', function ($scope) {
  $scope.sports = [
    {'name': 'Basketball',
     'snippet': 'A game with a ball'},
    {'name': 'Tennis',
     'snippet': 'A game with a racquet.'},
    {'name': 'Bowling',
     'snippet': 'A game with pins.'}
  ];


$scope.getData();



});

$scope.getData = function(data){
    $http({
      method: 'POST',
      url: '/someUrl'
    }).then(function successCallback(response) {
        $scope.sports = data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
}
