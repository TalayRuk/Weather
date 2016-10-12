//exports weatherModule from weather.js which has apiLey
var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  //Weather constructor to make new constructor
  //function Calculator(constructorParameter) {
  // constructor
// }
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
//Calculator.prototype.method = function(methodParameter) {
  // method code }
    currentWeatherObject.getWeather(city, displayHumidity);

  });
});
