var makeBinarySearchTree = function(value){
  var tree = {};
  if(value !== 'undefined') {
    tree[value] = {};
    tree[value].left = null;
    tree[value].right = null;
  }
  _.extend(tree, bstMethods);
  return tree;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var node = {};
  node.left = null;
  node.right = null;
  var keys = Object.keys(this.tree);

  //if anything in tree
  // no then start tree
  // yes then decide left or right
  // repeat
  if(keys.length === 0) {
    this.tree[value] = node;
  } else {

  }


};

bstMethods.contains = function(value) {

};

bstMethods.depthFirstLog = function() {

};








/*
 * Complexity: What is the time complexity of the above functions?
 */
