// Implement a doubly-linked list

var Node = function() {
  this.value = null;
  this.next = null;
  this.prev = null;
}

var List = function() {  
  this.start = null;
  this.end = null;
}

List.prototype.push = function(value) {
  var node = new Node();
  node.value = value;
  
  if (this.end) {
    this.end.next = node
  }
  
  node.prev = this.end;
  this.end = node;
  node.next = null;
  
  if (!this.start) {
    this.start = node;
  }
}

List.prototype.unshift = function(value) {
  var node = new Node();
  node.value = value;
  
  if (this.start) {
    this.start.prev = node;
  }
  
  node.next = this.start;
  this.start = node;
  node.prev = null;
  
  if (!this.end) {
    this.end = node;
  }
}

List.prototype.toArray = function() {
  var values = [];
  
  var pointer = this.start;
  
  while (pointer !== null) {
    values.push(pointer.value);
    pointer = pointer.next;
  }
  
  return values;
}

var list = new List();

console.log(list.toArray());

list.push('a');
console.log(list.toArray());

list.push('b');
console.log(list.toArray());

list.push('c');
console.log(list.toArray());

list.unshift('z');
console.log(list.toArray());
