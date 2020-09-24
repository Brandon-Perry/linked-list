// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    // this.storage = new Array();
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    let new_node = new Node(val);

    if (this.length === 0) {
      this.head = new_node;
    } else {
      this.tail.next = new_node;
    }

    this.tail = new_node;

    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      let result = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return result;
    }

    let searching = true;
    let searchObj = this.head;
    while (searching === true) {
      if (searchObj.next === this.tail) {
        searching = false;
      } else {
        searchObj = searchObj.next;
      }
    }
    searchObj.next = null;
    let result = this.tail;
    this.tail = searchObj;

    this.length--;
    return result;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {}

  // TODO: Implement the removeHead method here
  removeHead() {}

  // TODO: Implement the contains method here
  contains(target) {}

  // TODO: Implement the get method here
  get(index) {}

  // TODO: Implement the set method here
  set(index, val) {}

  // TODO: Implement the insert method here
  insert(index, val) {}

  // TODO: Implement the remove method here
  remove(index) {}

  // TODO: Implement the size method here
  size() {}
}

exports.Node = Node;
exports.LinkedList = LinkedList;
