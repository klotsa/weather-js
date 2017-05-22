(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/journal.js":2}],2:[function(require,module,exports){
function Entry(title,body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(){
  return this.body.split(' ').length;
}
Entry.prototype.vowelConsonants = function(){
  body = this.body.replace(/[^A-Za-z]/g,"");
  var consonants = [];
  var vowels = [];
  for(i=0;i<body.length;i++){
    if (body[i].match(/[AEIOUaeiou]/)){
      vowels.push(body[i]);
    }
    else {
      consonants.push(body[i])
    }
  }
  return [vowels.length, consonants.length]
}
Entry.prototype.getTeaser = function(){
  var result = [];
  var end = false;
  var i = 0;
  var body = this.body.split(' ');
  while(result.length<8 && end===false){
    result.push(body[i])
    if(body[i][body[i].length-1].match(/[!?.]/)||result.length==body.length){
      end = true;
    }
    i++
  }
  return result.join(' ');
}


exports.entryModule = Entry;

},{}]},{},[1]);
