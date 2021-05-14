$(function() {
  $.ajax({
    url: "https://geoip-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
      var city = location.city,
        state = location.state,
        country = location.country_name,
        lat = location.latitude,
        long = location.longitude;
		getWeather(lat, long);
    }
  });
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
		
		var date = new Date(data.dt*1000);
		console.log(date)
		var sunrise = new Date(data.sys.sunrise*1000);
		var sunset = new Date(data.sys.sunset*1000);
		
		var current_date = moment(date).format("DD MMM"); 
		sunrise = moment(sunrise).format("h:mm A"); 
		sunset = moment(sunset).format("h:mm A"); 
		
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
