var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    if (list.head === null) {
      list.head = makeNode(value);
      list.tail = list.head;
    } else if (list.head === list.tail) {
      list.head.next = makeNode(value);
      list.tail = list.head.next;
    } else {
      list.tail.next = makeNode(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    if (list.head === null) {
      return null;
    } else if (list.head === list.tail) {
      var temp = list.head.value;
      list.head = null;
      list.tail = null;
      return temp;
    } else {
      var temp = list.head.value;
      list.head = list.head.next;
      return temp;
    }

  };

  list.contains = function(target, checkNode){
    if (typeof checkNode === "undefined") {
      checkNode = list.head;
    } else {
      checkNode = checkNode;
    }

    if (checkNode.value === target) {
  //    console.log(true);
      return true;
    } else if (checkNode.next !== null) {
      return list.contains(target, checkNode.next);
    }

  //  console.log(false);
    return false;

    // while (checkNode) {
    //   if (checkNode.value === target) {
    //    return true;
    //   }
    //   checkNode = checkNode.next;
    // }
    // return false
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
