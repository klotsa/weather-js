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
})
