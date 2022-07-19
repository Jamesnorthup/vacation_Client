export default async function getWeatherFromLatLong() {
    var lat = 0;
    var lon = 0;

    //Weather API

    // Openweather API KEY
    var keyOpenWeather = "cfaed3d089ed42d06e536550168f54cd";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            fetchWeather(lat, lon);
        });
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }

    //Gets weather by user and stores data in variables. .
    async function fetchWeather(lat, lon) {

        var urlweather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyOpenWeather}&units=metric`;

        $.get(urlweather, "")
            .done(function (data) {
                //weather {id: 804, main: "Clouds", description: "overcast clouds", icon: "04d"}
                const weather_var = data.weather;
                //main {temp: 20.85, feels_like: 20.61, temp_min: 18.12, temp_max: 25.03, pressure: 1021, …}
                const main_var = data.main;
                //wind {speed: 2.06, deg: 160}
                const wind_var = data.wind;
                // Seattle
                const name_var = data.name;

                // Gets current date and time
                // current =  new Date();

                const TempF = main_var.temp / 0.5556 + 32;
                const speedMPH = parseInt(wind_var.speed) * 2.237;
                const CityName = "City of " + name_var + " Weather Summary"
                const Description = "Decription: " + weather_var[0].description
                const Temp = "Temperature: " + Math.round(parseInt(TempF)) + " F"
                const windspeed = "WindSpeed: " + Math.round(parseInt(speedMPH)) + " MPH"

                putWeather(CityName, Description, Temp, windspeed)

                $("#CityName").text(CityName);
                $("#Description").text(Description);
                $("#Temp").text(Temp);
                $("#windspeed").text(windspeed);

            })
            .fail(function (xhr, status, error) {
                alert("failed loading zip - status=" + status + " error=" + error);
            })
    }

    async function putWeather(CityName, Description, Temp, windspeed) {
        fetch("https://vacationapplication.herokuapp.com/CurrentWeather", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                CityName: CityName,
                Description: Description,
                Temp: Temp,
                windspeed: windspeed
            })
        }).then(res => {

            if (res.ok) return res.json()
        })
    }
}