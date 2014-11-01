var makeBinarySearchTree = function(value){
  this.storage = {};
  this.value = value;
  this.left = null;
  this.right = null;
};


makeBinarySearchTree.prototype.insert = function(value) {
  var tree = {};
  var keys = Object.keys(this.storage);
  if (keys.length === 0) {
    this.storage[value] = new makeBinarySearchTree(value);
  }
  if (this.value > value) {
    if (this.left === null) {
      this.left = new makeBinarySearchTree(value);
    } else {
      // recurse on this. left
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new makeBinarySearchTree(value);
    } else {
      // recurse on this.right
      this.right.insert(value);
    }
  }
};

makeBinarySearchTree.prototype.contains = function(value) {
  console.log(this);
  // compare this.value to given value
  if (this.value === value) {
    // if equal return true
    return true;
    // if not equal
      // check whether this.left does not equal null
  }
  if (this.value > value) {
    if (this.left !== null) {
        // if yes, recurse on branch
      return this.left.contains(value);
      // check whether this.right does not equal null
    }
  } else {
    if (this.right !== null) {
        // if yes, recurse on branch
      return this.right.contains(value);
    }
  }
    // return false
  return false;
};

makeBinarySearchTree.prototype.depthFirstLog = function(func) {
  //run function on this.value
  // func.bind(this.value);
  var callback = function (input) {
    func.call(null, input);
  };

  callback(this.value);

  //check if this.left does not equal null
  if (this.left !== null) {
    //if yes recurse function on left node
    this.left.depthFirstLog(func);
  }
  //check if this.right does not equal null
  if (this.right !== null) {
    //if yes recurse function on right node
    this.right.depthFirstLog(func);
  }



};








/*
 * Complexity: What is the time complexity of the above functions?
 */
