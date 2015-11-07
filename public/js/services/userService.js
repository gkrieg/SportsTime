SportsTimeApp.factory('UserService', function() {
    var obj;

     return function(firstname,lastname, email, age, gender, phone, zip, password){
        obj = {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "age": age,
            "gender": gender,
            "phone": phone,
            "zip": zip,
            "password": password
        };
        return obj;
    };
});
