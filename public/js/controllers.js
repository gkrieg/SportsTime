
SportsTimeApp.controller('UserCtrl', ['$scope','$http','UserService',function ($scope, $http,UserService) {


    $scope.user = UserService;


$scope.save = function() {


    var str = { "firstname": $scope.user.firstname,
    "lastname": $scope.user.lastname,
    "email": $scope.user.email,
    "age": $scope.user.age,
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
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    })
    $scope.goToState('home');

};

$scope.login = function() {
    var str = {"email": $scope.user.email,
    "password": $scope.user.password}
    ;
    alert(JSON.stringify(str))
    $http({
      method: 'POST',
      url: '/sportstime/validateUser',
      data: JSON.stringify(str)

    }).then(function successCallback(response) {
        $scope.user = response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    })
    $scope.goToState('home');
};
}]);
