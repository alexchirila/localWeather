 $(document).ready(function() {

  	var lat;
  	var lon;
  	var apiULR;  
  	getLocation();

  function getLocation() {
    $.getJSON("http://ipinfo.io", function(json) {
      var locationResult = JSON.stringify(json);
      locationResult = JSON.parse(locationResult);

     	lat = locationResult.loc.split(",")[0];
     	lon = locationResult.loc.split(",")[1];

     	apiULR = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=32c6c62553f6cee88ef515d11d75d8bf";

    $.getJSON(apiULR, function(json) {

        var result = JSON.stringify(json);
        result = JSON.parse(result);
        var tempInC = kelvinToCelsius(result.main.temp);
        var tempInF = kelvinToFahrenheit(result.main.temp);
        var weatherIconUrl = "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png";

        if (result.weather[0].icon == "01d") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/01d.jpg")');
        	$('h1').css('color', '#ffffff');
        	$('.temperature').css('color', '#ffffff');

        } else if (result.weather[0].icon == "01n") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/01n.jpg")');
        	$('h1').css('color', '#ffffff');
        	$('.temperature').css('color', '#ffffff');

        } else if (result.weather[0].icon == "02d") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/02d.jpg")');
        	$('h1').css('color', '#ffffff');
        	$('.temperature').css('color', '#ffffff');

        }  else if (result.weather[0].icon == "02n") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/02n.jpg")');
        	$('h1').css('color', '#ffffff');
        	$('.temperature').css('color', '#ffffff');

        }  else if (result.weather[0].icon == "03d") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/03d.jpg")');

        } else if (result.weather[0].icon == "03n") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/03n.jpg")');
        	$('h1').css('color', '#ffffff');
        	$('.temperature').css('color', '#ffffff');

        } else if (result.weather[0].icon == "04d") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/04d.jpg")');

        } else if (result.weather[0].icon == "04n") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/04n.jpg")');
        	$('h1').css('color', '#ffffff');
        	$('.temperature').css('color', '#ffffff');

        } else if (result.weather[0].icon == "09d" || result.weather[0].icon == "10d") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/09d.jpg")');

        } else if (result.weather[0].icon == "09n") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/09n.jpg")');
        	$('h1').css('color', '#ffffff');
        	$('.temperature').css('color', '#ffffff');

        } else if (result.weather[0].icon == "10n") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/10n.jpg")');
        	$('h1').css('color', '#ffffff');
        	$('.temperature').css('color', '#ffffff');

        } else if (result.weather[0].icon == "11d") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/11d.jpg")');

        } else if (result.weather[0].icon == "11n") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/11n.jpg")');
        	$('h1').css('color', '#ffffff');
        	$('.temperature').css('color', '#ffffff');

        } else if (result.weather[0].icon == "13d") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/13d.jpg")');

        } else if (result.weather[0].icon == "13n") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/13n.jpg")');
        	$('h1').css('color', '#ffffff');
        	$('.temperature').css('color', '#ffffff');

        } else if (result.weather[0].icon == "50d") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/50d.jpg")');

        } else if (result.weather[0].icon == "50n") {
        	$('.app-background').css('background-image', 'url("http://schematic.ro/projects/localWeather/images/50n.jpg")');
        	$('h1').css('color', '#ffffff');
        	$('.temperature').css('color', '#ffffff');
        }

		function kelvinToCelsius(temp) {
			var celsius = temp - 273.15;
			return Math.round( celsius * 10 ) / 10 + " C";
		}

		function kelvinToFahrenheit(temp) {
			return ((temp - 273.15)* 1.8000 + 32.00) + " F";
		}

        function degToCompass(num) {
          var val = Math.floor((num / 22.5) + 0.5);
          var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
          return arr[(val % 16)];
	    }

	    function milesToKm(value) {
		  var kmPerHour =  value * 1.609;
		  return Math.round( kmPerHour * 10 ) / 10;
	    }

	   	$(".temperature").html("<img src = '" + weatherIconUrl + "'> "  + tempInC);
        $(".location").html(locationResult.city + ", " + result.sys.country);
        $(".conditions").html(result.weather[0].description);
        $(".windspeed").html(degToCompass(result.wind.deg) + " " + milesToKm(result.wind.speed) + " Km/h");
	    

  		$("#myStateButton").click(function() { 
  			if ($("#myStateButton").text() == "Switch to Celsius") { 
     			$("#myStateButton").text("Switch to Fahrenheit"); 
		        $(".temperature").html("<img src = '" + weatherIconUrl + "'> "  + tempInC);
		    } else { 
     			$("#myStateButton").text("Switch to Celsius"); 
     			$(".temperature").html("<img src = '" + weatherIconUrl + "'> "  + tempInF);
  			}; 
		});

  	
  	});
    });

}


  });