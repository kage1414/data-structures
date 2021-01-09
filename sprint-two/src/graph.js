

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};
// Constant time

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  }
  return false;
};
// Constant time

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // check if the node exists
  // delete that key-value pair from graph
  delete this.nodes[node];
  for (var key in this.nodes) {
    // check if that node has a connection to the edge
    if (this.nodes[key][node]) {
      delete this.nodes[key][node];
    }
  }
};
// Linear Time

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if supplied nodes exist
  // if so, check references array of fromNode -- does array contain toNode
  if (this.nodes[fromNode].hasOwnProperty(toNode)) {
    return true;
  }

  return false;
};
// Constant time

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};
// Constant Time

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};
// Constant Time

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};
// Linear Time

/*
 * Complexity: What is the time complexity of the above functions?
 */


