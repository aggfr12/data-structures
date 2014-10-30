var makeStack = function() {
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.counter = 0;
  return stack;
};

var stackMethods = {};

stackMethods.push = function(x) {
  this.storage[this.counter] = x;
  this.counter ++;
  console.log(this.counter);
}

stackMethods.pop = function() {
  if(this.counter === 0) {
    return 0;
  } else {
    this.counter --;
    var tempPop = this.storage[this.counter];
    delete this.storage[this.counter];
    return tempPop;
  }
}

stackMethods.size = function() {
  return this.counter;
}
