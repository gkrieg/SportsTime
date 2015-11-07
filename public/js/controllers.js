
SportsTimeApp.controller('UserCtrl', ['$scope','$http','UserService',function ($scope, $http,UserService) {


    $scope.user = UserService;
$scope.insertUser = function(data){


    alert("something");
    $http({
      method: 'POST',
      url: '/sportstime/insertUser/'
    }).then(function successCallback(response) {
        $scope.sports = data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
}

$scope.save = function() {
    alert($scope.user());
    $http({
      method: 'POST',
      url: '/sportstime/insertUser/',
      data: $scope.user()
    }).then(function successCallback(response) {
        $scope.sports = data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    })
    $scope.goToState('home');

};







}]);
