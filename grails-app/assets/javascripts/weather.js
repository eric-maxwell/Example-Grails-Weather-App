
var WeatherService = $ = (function () {
   // var locationURL = 'https://weathersync.herokuapp.com/ip';
   // var weatherBaseURL = 'https://weathersync.herokuapp.com/weather/';
    var locationURL = 'http://ipinfo.io/json';
    var weatherBaseURL = 'http://localhost:8080/api/v1/weather/current/';

    function getLocation(callback) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            callback(e.target.response);
        };
        oReq.open('GET', locationURL, true);
        oReq.responseType = 'json';
        oReq.send();
    };

    function getWeather(callback, zip) {
        var oReq = new XMLHttpRequest();
        oReq.responseType = 'json';
        oReq.onload = function (e) {
            callback(e.target.response);
        };
        if(zip === undefined || zip === '') {
            getLocation(function(response) {
                oReq.open('GET', weatherBaseURL + response.zip, true);
                oReq.send();
            });
        }else{
            oReq.open('GET', weatherBaseURL + zip, true);
            oReq.send();
        }
    };
    return {
        getLocation: getLocation,
        getWeather: getWeather
    }
})();