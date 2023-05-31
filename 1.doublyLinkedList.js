class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; //  doubly linked list pointers to both forward and backward directions
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail; //  doubly linked list pointers to both forward and backward directions
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  deleteAtHead() {
    if (this.isEmpty()) {
      return null;
    }
    const deletedNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;// making the head's next element as the new head
      this.head.prev = null;
    }
    this.size--;
    return deletedNode.data;
  }

  deleteAtTail() {
    if (this.isEmpty()) {
      return null;
    }
    const deletedNode = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev; // making the tails previous element as the new tail
      this.tail.next = null;
    }
    this.size--;
    return deletedNode.data;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Doubly linked list is empty.");
    } else {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);  // displaying the data present in the doubly linked list.
        current = current.next;
      }
    }
  }
}

// Example usage:
const dll = new DoublyLinkedList();

dll.insertAtHead(2);
dll.insertAtHead(1);
dll.insertAtTail(3);
dll.insertAtTail(4);

dll.display();

dll.deleteAtHead();
dll.deleteAtTail();
console.log("-----------------------------")
dll.display();

