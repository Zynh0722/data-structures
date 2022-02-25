

// Instantiate a new graph
var Graph = function() {
  // this.nodes = [];
  this.nodes = {};
};

var GraphNode = function(value) {
  this.value = value;
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this.nodes[value] = (new GraphNode(value));
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  return _.some(this.nodes, (node) => { return node.value === value; });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  this.nodes[value].edges.forEach((edge) => {
    this.removeEdge(value, edge);
  });

  delete this.nodes[value];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.nodes[fromNode].edges, toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode)) {
    this.nodes[fromNode].edges.push(toNode);
    this.nodes[toNode].edges.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    this.nodes[fromNode].edges.splice(this.nodes[fromNode].edges.indexOf(toNode), 1);
    this.nodes[toNode].edges.splice(this.nodes[toNode].edges.indexOf(fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, (node) => {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


