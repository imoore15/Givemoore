$(function() {


    new GMaps({
        div: '#search-maps',
        lat: 35.4887,
        lng: -82.9887,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        zoom: 8

    });

    var openWeatherMapKey = "d7fe524de6497aad8bf77c0978b4b3af";

    $('#searchTerm').submit(function(event) {
        event.preventDefault();

   		 var spot = $('#pac-input').val();
   		 $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + spot + '&appid=' + openWeatherMapKey, showWeather, function(data) {
            console.log(data);


    		new GMaps({
                div: '#search-maps',
                lat: data.coord.lat,
                lng: data.coord.lon,
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                zoom: 9

            });


        });


   		  var showWeather = function(data) {
    $("#test").text("I AM CHANGED. THANKS!")
    $("#temp").text(data.main.temp)
    $("#description").text(data.weather[0].description)
    $("#place").text(data.name)
};

   	});

});