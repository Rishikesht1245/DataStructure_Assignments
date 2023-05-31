// initialising the node with point to next node
class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }
    
    // queue class
    class Queue {
      constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
      }
    
      isEmpty() {
        return this.size === 0;
      }
    
      enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
          this.front = newNode; // giving instance of node to front and rear.
          this.rear = newNode;
        } else {
          this.rear.next = newNode;
          this.rear = newNode;
        }
        this.size++;
      }
    
      dequeue() {
        if (this.isEmpty()) {
          return null;
        }
        const deletedNode = this.front;
        if (this.front === this.rear) {
          this.front = null;
          this.rear = null;
        } else {
          this.front = this.front.next;
        }
        this.size--;
        return deletedNode.data;
      }
    
      peek() {
        if (this.isEmpty()) {
          return null;
        }
        return this.front.data;
      }
    
      getSize() {
        return this.size;
      }
    
      display() {
        if (this.isEmpty()) {
          console.log("Queue is empty.");
        } else {
          let current = this.front;
          while (current !== null) {
            console.log(current.data);
            current = current.next;
          }
        }
      }
    }
    
    // Example usage:
    const queue = new Queue();
    
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    
    console.log(queue.peek());  // Output: 1
    
    console.log(queue.dequeue());  // Output: 1
    
    console.log(queue.getSize());  // Output: 2
    
    queue.display();
    // Output:
    // 2
    // 3
    