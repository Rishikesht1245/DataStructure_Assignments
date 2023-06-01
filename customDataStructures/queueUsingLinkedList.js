const LinkedList = require('./stackLinkedListModule');

class LinkedListQueue{
      constructor(){
            this.list = new LinkedList()
      }

      enqueue(value){
            // insert a value at the rear end (tail)
            this.list.append(value);
      }

      dequeue(){
            // remove fron element. (head)
            return this.list.removeFromFront();
      }

      peek(){
            return this.list.head.value;
      }

      getSize(){
            return this.list.getSize();
      }

      isEmpty(){
            return this.list.isEmpty();
      }

      print(){
            return this.list.print();
      }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty()); // true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.getSize()); //3
queue.print(); // 10 20 30

console.log(queue.dequeue());// 20 30
queue.print(); // 20 30