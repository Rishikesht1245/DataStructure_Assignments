class Queue{
      constructor(){
            this.items = {};
            this.rear = 0; // act as keys
            this.front = 0;
      }
      enqueue(element){
            this.items[this.rear] = element;
            this.rear++;
      }
      dequeue(){
            const item = this.items[this.front];
            delete this.items[this.front];
            this.front++;//change front to 1th key when 0th key is deleted
            return item;
      }
      isEmpty(){
            return this.rear - this.front === 0;
      }
      peek(){
            return this.items[this.front];
      }
      size(){
            return this.rear - this.front;
      }
      print(){
            console.log(this.items)
      }
}


let queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
queue.print();

console.log(queue.dequeue());
queue.print();
