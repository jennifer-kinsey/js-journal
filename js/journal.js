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

exports.entryModule = Entry;
