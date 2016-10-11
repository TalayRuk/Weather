// var apiKey = "92989787b162da83230574f8e3e4b79b";
//API key from OpenWeatherMap.org (sign in to get API key access)
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    //Use the click handler to the btn to get the city name entered into our form
    var city = $('#location').val();
    $('#location').val();
    $('.showWeather').text("The city you have chosen is" + city + ".");
// ***should run to c if there's any error b4 start API request***


  });
});
