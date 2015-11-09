
SportsTimeApp.controller('UserCtrl', ['$scope','$http','UserService','$state',function ($scope, $http,UserService,$state) {

    $scope.user = UserService;

    $scope.save = function() {

        var str = { "firstname": $scope.user.firstname,
        "lastname": $scope.user.lastname,
        "age": $scope.user.age,
        "email": $scope.user.email,
        "phone": $scope.user.phone,
        "zip": $scope.user.zip,
        "password": $scope.user.password}
        ;

        $http({
          method: 'POST',
          url: '/sportstime/insertUser/',
          data: JSON.stringify(str)

        }).then(function successCallback(response) {
            $scope.signInRes = response.data[0];
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
          url: '/sportstime/validateUser',
          data: JSON.stringify(str)
        }).then(function successCallback(response) {
            if (response.data[0]){
                $scope.loggedInUser = response.data[0];
                $scope.loggedInUser.firstname = response.data[0].firstname;
                $scope.loggedInUser.lastname = response.data[0].lastname;
                $scope.loggedInUser.age = response.data[0].age;
                $scope.loggedInUser.email = response.data[0].email;
                $scope.loggedInUser.phone = response.data[0].phone;
                $scope.loggedInUser.zip = response.data[0].zip;
            }

            $state.go('home');
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        })

    };

    $scope.goToState = function(state) {
        console.log(state);
        $state.go(state);

    };


}]);

SportsTimeApp.controller('SportsCtrl', ['$scope', '$http', 'EventService', function($scope, $http,EventService) {
    $scope.event = EventService();
    $scope.categories = [];
    $http({
        method: 'GET',
        url: '/sportstime/getSportList/'
    }).then(function successCallback(response) {
        $scope.categories = response.data;
    }, function errorCallback(response) {
        return;
    });

    $scope.loadEvents = function(sport, show) {
        if (show) {
            $http({
                method: 'POST',
                url: '/rest/sportstime/getEvents/',
                data: JSON.stringify(sport)
            }).then(function successCallback(response) {
                sport.events = response.data;
            }, function errorCallback(response) {
                return;
            });
        }
    };

    $scope.create = function(sport_id){
        var otherstr = 'ObjectId("563e4d039a3e6617209fd8b3")'
        var str = { "place": $scope.event.place,
        "time": $scope.event.time,
        "date": $scope.event.date,
        "sport_id": sport_id,
        "people": 1
    }

        ;

        $http({
          method: 'POST',
          url: '/rest/sportstime/insertEvent/',
          data: JSON.stringify(str)

        }).then(function successCallback(response) {
            $scope.signInRes = response.data[0];
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        })
    };
}]);

SportsTimeApp.controller('ProfileCtrl', ['$scope','$state', function($scope, $state) {
    $scope.categories = [];


}]);

SportsTimeApp.controller('EventCtrl', ['$scope','EventService','state', function($scope, EventService,$state) {
    $scope.event = EventService();

    $scope.create = function(sport_id){
        var str = { "place": $scope.event.place,
        "time": $scope.event.time,
        "date": $scope.event.date,
        "sport_id": "ObjectId(" + sport_id + ")",
        "people": 1
    }

        ;

        $http({
          method: 'POST',
          url: '/sportstime/insertEvent/',
          data: JSON.stringify(str)

        }).then(function successCallback(response) {
            $scope.signInRes = response.data[0];
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        })
    }


}]);
