
SportsTimeApp.controller('UserCtrl', ['$scope','$http','UserService','$state',function ($scope, $http,UserService,$state) {


    $scope.user = UserService;


$scope.save = function() {


    var str = { "firstname": $scope.user.firstname,
    "lastname": $scope.user.lastname,
    "email": $scope.user.email,
    "age": $scope.user.age,
    "gender": $scope.user.gender,
    "phone": $scope.user.phone,
    "zip": $scope.user.zip,
    "password": $scope.user.password}
    ;
    alert(JSON.stringify(str))
    $http({
      method: 'POST',
      url: '/sportstime/insertUser/',
      data: JSON.stringify(str)

    }).then(function successCallback(response) {
        $scope.user = $scope.user();
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    })
    $state.go('home');

};

$scope.login = function() {
    var str = {"email": $scope.user.email,
    "password": $scope.user.password}
    ;
    $http({
      method: 'POST',
      url: '/sportstime/validateUser/',
      data: JSON.stringify(str)

    }).then(function successCallback(response) {
        $scope.user = response.data[0];
        $state.go('home');
      }, function errorCallback(response) {
        console.log("I can't")
    })

};
}]);
