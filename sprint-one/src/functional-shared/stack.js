var makeStack = function() {
  var stack = {};
  stack.storage = {};
  stack.counter = 0;
  _.extend(stack, stackMethods);
  // console.log(stack.counter);

  return stack;
};

var stackMethods = {};

stackMethods.pop = function () {
  if (this.counter === 0) {
    return 0;
  } else {
    this.counter--;
    var popVal = this.storage[this.counter];
    delete this.storage[this.counter];
    return popVal;
  }
}

stackMethods.push = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
}

stackMethods.size = function() {
  return this.counter;
}
