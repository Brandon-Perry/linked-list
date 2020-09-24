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
  addToHead(val) {
    let new_node = new Node(val);
    if (this.length === 0) {
      this.head = new_node;
      this.tail = new_node;
      this.length++;
      return this;
    }

    new_node.next = this.head;

    this.head = new_node;

    this.length++;

    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (this.length === 0) {
      return undefined;
    }

    let removed_head = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return removed_head;
    }

    this.head = this.head.next;

    this.length--;
    return removed_head;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let searchObj = this.head;
    while (searchObj !== null) {
      if (searchObj.value === target) {
        return true;
      } else {
        searchObj = searchObj.next;
      }
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index > this.length - 1) return null;
    let count = 0;
    let searchObj = this.head;
    while (count < index) {
      searchObj = searchObj.next;
      count++;
    }
    return searchObj;
  }

  // TODO: Implement the set method here
  set(index, val) {
    if (index > this.length - 1 || index < 0) return false;
    let result = this.get(index);
    result.value = val;
    return true;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index > this.length || index < 0) return false;

    let new_node = new Node(val);
    let currentNode = this.get(index);

    if (currentNode === this.head) {
      this.addToHead(val);
      return true;
    }
    if (index === this.length) {
      this.addToTail(val);
      return true;
    }

    let previousNode = this.get(index - 1);
    new_node.next = currentNode;
    previousNode.next = new_node;

    this.length++;
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index > this.length - 1 || index < 0) return undefined;

    let currentNode = this.get(index);
    if (currentNode === this.head) {
      return this.removeHead();
    }
    if (currentNode === this.tail) {
      return this.removeTail();
    }

    let previousNode = this.get(index - 1);
    let nextNode = this.get(index + 1);
    // currentNode.next = null;
    previousNode.next = nextNode;

    this.length--;
    return currentNode;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
