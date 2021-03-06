(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b95f844becba6ac3aa811780b2fae11e";

},{}],2:[function(require,module,exports){
function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.getVowels = function(body) {
  var m = body.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
};

Entry.prototype.getConsonants = function(body){
  var m = body.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return m === null ? 0 : m.length;
};

Entry.prototype.getTeaser = function(body){
  var sentence = body.split('.');
  sentence = sentence[0];
  var splitSentence = sentence.split(" ");
  if (splitSentence.length > 8) {
    sentence = splitSentence.slice(0, 7).join(" ");
  }
  return sentence;
};

exports.entryModule = Entry;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Weather = function(){
}

Weather.prototype.getWeather = function(city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayHumidity(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var output = newEntry.getVowels(body);
    var output1 = newEntry.getConsonants(body);
    var output2 = newEntry.getTeaser(body);
    $('#result').append("<h3>" + title + "</h3>");
    $('#result').append("<p>" + body + "</p>");
    $('#result').append("<h4> number of vowels: " + output + "</h4> ");
    $('#result').append("<h4> number of consonants: " + output1 + "</h4> ");
    $('#result').append("<h4> first sentence: " + output2 + "</h4> <hr>");
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});

},{"./../js/journal.js":2,"./../js/weather.js":3}]},{},[4]);
