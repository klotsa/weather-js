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
