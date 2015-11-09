SportsTimeApp.factory('EventService', function() {
    var obj;

     return function(place,time, date){
        obj = {
            "place": place,
            "time": time,
            "date": date

        };
        return obj;
    };
});
