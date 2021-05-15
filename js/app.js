$(function() {
	//new orleans lat long
	getWeather('29.951065', '-90.071533');
});

function getWeather(lat, long) {
  $.ajax({
    url:"https://fcc-weather-api.glitch.me/api/current?lat=" +lat +"&lon=" +long,
    type: "get",
    success: function(data) {
		var temp = data.main.temp,
		clouds=data.clouds.all+ "%",
        tempC = Math.round(data.main.temp) + "&#8451;",
        tempF = Math.round(temp * 9 / 5 + 32) + "&#8457;",
        status = data.weather[0].main + " / " + data.weather[0].description,
        icon = data.weather[0].icon,
        humidity = data.main.humidity + "%";
		console.log(data, humidity);
		// $("#icon").html("<img src='" + icon + "' />");
		// $("#status").html(status + " / " + humidity + " humidity");
		$("#temp_fahrenheit").html(tempF);
		$("#clouds").text(clouds);
		$("#humidity").text(humidity);
		//Converting to timestamp
		
		var current_date = moment.unix(data.dt).tz('America/Chicago').format("DD MMM"); 
		var sunrise = moment.unix(data.sys.sunrise).tz('America/Chicago').format("h:mm A"); 
		var sunset = moment.unix(data.sys.sunset).tz('America/Chicago').format("h:mm A"); 
		
		$("#current_date").text(current_date);
		$("#sunrise").text(sunrise);
		$("#sunset").text(sunset);

      // $(".btn-primary").on("click", function(e) {
        // e.preventDefault();
        // $(this).addClass("active").siblings().removeClass("active");
        // $(".celcius").hasClass("active")
          // ? $("#temp").html(tempC)
          // : $("#temp").html(tempF);
      // });
    },
    error: function(error) {
      console.log(JSON.stringify(error));
    }
  });
}
