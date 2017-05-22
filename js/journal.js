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
