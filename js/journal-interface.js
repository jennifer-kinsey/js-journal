var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var output = newEntry.getVowels(body);
    var output1 = newEntry.getConsonants(body);
    $('#result').append("<h3>" + title + "</h3>");
    $('#result').append("<p>" + body + "</p>");
    $('#result').append("<h4> number of vowels: " + output + "</h4> ");
    $('#result').append("<h4> number of consonants: " + output1 + "</h4> <hr>");
  });
});
