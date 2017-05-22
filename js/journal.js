function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.getVowels = function(body) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
};

exports.entryModule = Entry;
