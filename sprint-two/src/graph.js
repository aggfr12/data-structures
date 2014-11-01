var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var vertices = {};
  vertices.edges = {};

  var keys = Object.keys(this.nodes);

  if(keys.length === 1) {
    vertices.edges[keys[0]] = this.nodes[keys[0]];
    this.nodes[keys[0]].edges[newNode] = vertices;
  } else if (typeof toNode !== 'undefined') {
    vertices.edges[toNode] = this.nodes[toNode];
    this.nodes[toNode].edges[newNode] = vertices;
  }

  this.nodes[newNode] = vertices;
};

Graph.prototype.contains = function(node){
  return typeof this.nodes[node] !== "undefined";
};

Graph.prototype.removeNode = function(node){
  var keys = Object.keys(this.nodes[node].edges);
  for(var i=0; i<keys.length; i++) {
    this.removeEdge(node, keys[i]);
  }
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return typeof this.nodes[fromNode].edges[toNode] !== 'undefined';
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges[toNode] = this.nodes[toNode];
  this.nodes[toNode].edges[fromNode] = this.nodes[fromNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
  if (Object.keys(this.nodes[fromNode].edges).length === 0) {
    delete this.nodes[fromNode];
  }
  if (Object.keys(this.nodes[toNode].edges).length === 0) {
    delete this.nodes[toNode];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
