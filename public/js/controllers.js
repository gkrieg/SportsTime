
SportsTimeApp.controller('UserCtrl', ['$scope','$http','UserService',function ($scope, $http,UserService) {


    $scope.user = UserService;
$scope.insertUser = function(data){


    alert("something")
    $http({
      method: 'POST',
      url: '/SportsTime/insertUser'
    }).then(function successCallback(response) {
        $scope.sports = data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
}

$scope.save = function() {

    var str = { "firstname": $scope.user.firstname,
    "lastname": $scope.user.lastname,
    "age": $scope.user.age,
    "email": $scope.user.email,
    "phone": $scope.user.phone,
    "zip": $scope.user.zip,
    "password": $scope.user.password}
    ;
    alert(JSON.stringify(str))
    $http({
      method: 'POST',
      url: '/SportsTime/insertUser',
      data: $scope.user
    }).then(function successCallback(response) {
        $scope.sports = data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    })
    $scope.goToState('home');

};







}]);
