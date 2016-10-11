(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
