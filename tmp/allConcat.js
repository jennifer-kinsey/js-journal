var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var output = newEntry.getVowels(body);
    output.forEach(function(element){
      $('#result').append("<h5>" + title + "</h5>");
      $('#result').append("<p>" + body + "</p>");
      $('#result').append("<h6> number of vowels: " + output + "</h6>");
    });
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
