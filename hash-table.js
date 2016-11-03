var crypto = require('crypto');

var Hash = function() {
  this.storage = [];
  this.storageSize = 10;
  this.size = 0;
}

Hash.prototype.insert = function(key, value) {
  var index = this.hash(key); 
  
  if (!this.storage[index]) {
    this.storage[index] = [];
  }
  
  var push = true;
  
  for (var i = 0; i < this.storage[index].length; i++) {
    if (this.storage[index][i][0] == key) {
      this.storage[index][i][1] = value;
      push = false;
      break;
    }
  }
  
  if (push) {
    this.storage[index].push([key, value]);
    this.size++;
  }
  
  if (this.size / this.storageSize > .75) {
    this.resize();
  }
}

Hash.prototype.resize = function() {
  var self = this;
  var oldStorage = this.storage;
  
  this.storage = [];
  this.storageSize = this.storageSize * 2;
  this.size = 0;
  
  oldStorage.forEach(function(bucket) {
    for (var i = 0; i < bucket.length; i++) {
      self.insert(bucket[i][0], bucket[i][1]);
    }
  });
}

Hash.prototype.lookup = function(key) {
  var index = this.hash(key);
  
  for (var i = 0; i < this.storage[index].length; i++) {
    if (this.storage[index][i][0] == key) {
      return this.storage[index][i][1];
    }
  }
  
  return undefined;
}

Hash.prototype.hash = function(key) {
  var hash = crypto.createHash('md5').update(key).digest();
  var integer = hash.readUInt32LE(0);
  return integer % this.storageSize;
}

var testHash = new Hash();

testHash.insert('aaa', 'bar');
testHash.insert('aab', 'bar');
testHash.insert('aac', 'bar');
testHash.insert('aad', 'bar');
testHash.insert('aae', 'bar');
testHash.insert('aaf', 'bar');
testHash.insert('aag', 'bar');
testHash.insert('aah', 'bar');
testHash.insert('aag', 'bar');
testHash.insert('aai', 'bar');
testHash.insert('aak', 'bar');

console.log(testHash.lookup('aaa'));
console.log(testHash.lookup('aai'));
console.log(testHash.lookup('abc'));

console.log(testHash.storage);
