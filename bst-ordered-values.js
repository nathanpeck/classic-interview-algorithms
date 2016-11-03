// BST implementation, with a recrusive method for pulling the values out in order

var Node = function() {
  this.value = null;
  this.left = null;
  this.right = null;
}

var BST = function() {
  this.root = null;
}

BST.prototype.insert = function(value) {
  if (!this.root) {
    this.root = new Node();
    this.root.value = value;
    return;
  }
  
  var currentNode = this.root;
  while(currentNode) {
    if (currentNode.value < value) {
      if (currentNode.right == null) {
        currentNode.right = new Node();
        currentNode.right.value = value;
        break;
      } else {
        currentNode = currentNode.right;
      }
    } else if (currentNode.value > value) {
      if (currentNode.left == null) {
        currentNode.left = new Node();
        currentNode.left.value = value;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      // Found it already in the tree
      break;
    }
  }
}

BST.prototype.orderedValues = function(node) {
  var values = [];
  
  if (node.left) {
    values = values.concat(this.orderedValues(node.left));
  }
  
  values.push(node.value);
  
  if (node.right) {
    values = values.concat(this.orderedValues(node.right));
  }
  
  return values;
}

BST.prototype.toOrderedArray = function() {
  return this.orderedValues(this.root);
}

var bst = new BST();

bst.insert(5);
bst.insert(10);
bst.insert(6);
bst.insert(11);
bst.insert(8);
bst.insert(2);
bst.insert(1);

console.log(bst.toOrderedArray());
