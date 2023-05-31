class PriorityQueue {
      constructor() {
        this.heap = []; // initializing the heap with an empty array
      }
    
      isEmpty() {
        return this.heap.length === 0;
      }
    
      insert(element, priority) {
        const item = { element, priority }; // elements are added as an object to the array.
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1); // item will be added to the last position in the node and it will be passed to bubble up
      }
    
      extractMin() {   // extract min is poll functionality removing element from the top
        if (this.isEmpty()) {
          return null;
        }
        const minItem = this.heap[0]; // Item with max priority (1 )
        const lastItem = this.heap.pop();  // Item with min priority (greater than 1)
        if (this.heap.length > 0) {
          this.heap[0] = lastItem;   // replaced the max priority item to the top 0th index
          this.bubbleDown(0);       
        }
        return minItem.element; 
      }
    
      bubbleUp(index) {
        const currentItem = this.heap[index];  // setting the current item with the inserted item.
        while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2); //equation to find the parent index ( current index 3 then parent index will be 1)
          const parentItem = this.heap[parentIndex];
          if (currentItem.priority >= parentItem.priority) { // keeping the most priority item at top, as 1 has more priority than 2.
            break;
          }
          this.heap[index] = parentItem; // else we need to bubble up the current item.
          index = parentIndex;   // index is set to parent index
        }
        this.heap[index] = currentItem; // setting the current item to the parent index
      }
    
      bubbleDown(index) {
        const currentItem = this.heap[index]; // element at the top after replacing.
        const lastIndex = this.heap.length - 1; // last index
        while (true) {
          let childIndex = 2 * index + 1; // equation for child index.
          if (childIndex > lastIndex) {
            break;
          }
          const nextChildIndex = childIndex + 1; // right child 
          if (nextChildIndex <= lastIndex && this.heap[nextChildIndex].priority < this.heap[childIndex].priority) {
            childIndex = nextChildIndex; // right item has more priority than left item
          }
          const childItem = this.heap[childIndex]; // child item settind
          if (currentItem.priority <= childItem.priority) { //if current item has more priority then nothing to do
            break;
          }
          this.heap[index] = childItem; // replace the top element with the child element if child has more priority.
          index = childIndex;
        }
        this.heap[index] = currentItem;
      }
    }
    
    // Example usage:
    const pq = new PriorityQueue();
    
    pq.insert("Task 1", 3);
    pq.insert("Task 2", 1);
    pq.insert("Task 3", 2);
    
    console.log(pq.extractMin());  // Output: Task 2
    console.log(pq.extractMin());  // Output: Task 3
    console.log(pq.extractMin());  // Output: Task 1
    