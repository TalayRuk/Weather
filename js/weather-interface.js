
var Weather = require('./../js/weather.js').weatherModule;
//API key from OpenWeatherMap.org (sign in to get API key access)
$(document).ready(function() {
  var currentWeatherObject = new Weather();
  
  $('#weatherLocation').click(function() {
    //Use the click handler to the btn to get the city name entered into our form
    var city = $('#location').val();
    var humidity = currentWeatherObject.getWeather(city);
    $('.showWeather').text("The humidity in " + city + " is " + humidity + "%");
    console.log(humidity);
    // ***should run to c if there's any error b4 start API request***
    // $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
    //   console.log(response);

          //inside the click handler, we're going to add in a call to the API using the jQuery method get
            //GET method makes a GET request using AJAX. It takes 2 arguments. THe first is the URL to make the requeset to. This is basically the same URL we looked at earlier, just with variables for the city and the API key. The 2nd argument is a callback function. *Remember that a callback function is a function that is called when something else happens - in this case, when the API has returned a response to our request. THe parameter to the callback function, response, will be assigned to the data returned from the API. We can print it out in the console and see that it's a large set of objects.
      // $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      // $('.showdetail').append("The wind speed in " + city + " is " + response.wind.speed + ".");
      //   console.log("The humidity in " + city + " is " + response.main.humidity + "%");
      // });
            //The more you write JavaScript code, the more you'll need to keep in mind the concept of asynchronicity. Asynchronicity refers to the way that JavaScript code can be executed out of order. Here's an easy way to see asynchrony in the code we just wrote:
      // console.log("Notice: The GET request has been made.");
            //Now, before we run this code, which statement do you think will be logged to the console first? Reading from top to bottom, we'd expect to see the humidity before the notice.
              //**But when we actually run the code, we'll see them in the **reverse order
              //Remember that AJAX stands for Asynchronous JavaScript And XML. When an AJAX request is made, the code after it will run before the the callback code. The asynchronous nature of programming in JavaScript can be confusing at times, but it's extremely powerful, as it prevents the user interface from locking up during long-running events like AJAX requests, which often take half a second or more to complete.

              //Refactor our code Using PROMISES. The *then()* method of a promise is called when a promise enters the fulfilled state
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
//    }).fail(function(error) {//add Error .fail() method when a promise enters the rejected state.An object representing the error is passed into the fail method if it is called.
//         $('.showWeather').text(error.responseJSON.message);
//    }); * final changed .. moved to logic.js part
  });
});

        //the advantage is. Promises really shine when you have multiple asynchronous operations that depend on each other. Here-s an example taken from a Quora post on promises:
//
//         function isUserTooYoung(id, callback) {
//   openDatabase(function(db) {
//     getCollection(db, 'users', function(col) {
//       find(col, {'id': id},function(result) {
//         result.filter(function(user) {
//           callback(user.age < cutoffAge)
//         });
//       });
//     });
//   });
// }
// This can be refactored using promises much more cleanly:
//
// function isUserTooYoung(id) {
//   return openDatabase(db)
//     .then(getCollection)
//     .then(find.bind(null, {'id': id}))
//     .then(function(user) {
//       return user.age < cutoffAge;
//     });
// }
