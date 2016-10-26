<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Welcome to PS Weather APP Test</title>
    <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />
</head>
<body>
<div class="main">
    <input id="zip" type="text" placeholder="Zip"/>
    <button onclick="getData()">Get Weather</button>
    <p id="label">CURRENT CONDITIONS FOR:</p>
    <p id="city"></p>
    <div class="weathericon"><img id="icon" src=""/></div>
    <p id="description"></p>
</div>

<script src="assets/weather.js"></script>

<script>
    function getData(){
        $.getWeather(function(response){
            document.getElementById("city").innerHTML = response.name;
            document.getElementById("description").innerHTML = response.weather[0].main;
            document.getElementById("icon").src = 'https://openweathermap.org/img/w/'+response.weather[0].icon + '.png';
        }, document.getElementById("zip").value);
    }
</script>
</body>
</html>
