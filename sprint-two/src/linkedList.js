var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new instance of node
    var newNode = Node(value);
    // if no head
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // assign a temporary variable to the head
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function(target) {
    // check values of both the head and the tail first
    if (list.head.value === target || list.tail.value === target) {
      return true;
    }

    // create currentNode variable (set to head at first)
    var currentNode = list.head;

    // checks everything inbetween head and tail
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      // change currentNode to the next node
      if (currentNode.value === target) {
        return true;
      }
    }
    // return false otherwise
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
