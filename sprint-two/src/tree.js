var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  // add treeMethods to newTree object
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  // Check if parent is target
  if (this.value === target) {
    return true;
  }
  // Iterate over each children array
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      // Check to see if each branch has it's own children.
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
