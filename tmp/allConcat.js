var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    $('#wordCount').text('Word Count: '+newEntry.wordCount());
    $('#consonantCount').text('Consonant Count: '+newEntry.vowelConsonants()[1]);
    $('#vowelCount').text('Vowel Count: '+newEntry.vowelConsonants()[0]);
    $('#teaser').text('Teaser: '+newEntry.getTeaser());
  });
});

var apiKey = "990bbc0dfef73ea05ad6034184f72ec5";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(response['coord']);
    });
  });
});
