class Stack {
  constructor() {
    this.stack = []; // initialising the stack with an empty array
  }

  isEmpty() {
    return this.stack.length === 0; // checking if stack is empty or not return true or false
  }

  push(element) {
    this.stack.push(element);  // add element to the end
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop(); // remove element from the beginning
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1]; // return the last element in the array
  }

  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
    } else {
      for (let i = this.stack.length - 1; i >= 0; i--) {
        console.log(this.stack[i]);    // display the entire stack
      }
    }
  }
}

// usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());  // Output: 3

console.log(stack.pop());  // Output: 3

console.log(stack.size());  // Output: 2

stack.display();
