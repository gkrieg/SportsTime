// SportsTimeApp.service('UserService', UserService);
//     function UserService(){
//         "use strict";
//
//         this.CreateUser = function(firstname,lastname, email, age, phone, zip, password){
//             var obj = {
//                 firstname: firstname,
//                 lastname: lastname,
//                 email: email,
//                 age: age,
//                 phone: phone,
//                 zip: zip,
//                 password: password
//
//             };
//
//             return obj;
//         };
//
//         // this.save = function() {
//         //     alert("something")
//         //     $http({
//         //       method: 'POST',
//         //       url: '/SportsTime/insertUser'
//         //     }).then(function successCallback(response) {
//         //         $scope.sports = data;
//         //       }, function errorCallback(response) {
//         //         // called asynchronously if an error occurs
//         //         // or server returns response with an error status.
//         //     })
//         //
//         // };
//         //
//         //
//         // this.load = function() {
//         //
//         // };
//
//
//
// };

SportsTimeApp.factory('UserService', function() {
    var obj;

     return function(firstname,lastname, email, age, phone, zip, password){
        obj = {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "age": age,
            "phone": phone,
            "zip": zip,
            "password": password

        };

        return JSON.stringify(obj);

    };

    


  // factory function body that constructs shinyNewServiceInstance
});
