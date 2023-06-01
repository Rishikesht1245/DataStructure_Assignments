class Node{
      constructor(value){
            this.value = value;
            this.next = null;
      }
}

class LinkedList{
      constructor(){
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

      prepend(value){
            const node = new Node(value)
            if(this.isEmpty()){
                  this.head = node;
                  this.tail = node;
            }else{
                  node.next = this.head;
                  this.head = node;
            }
            this.size++;
      }

      append(value){
            const node = new Node(value);
            if(this.isEmpty()){
                  this.head = node;
                  this.tail = node;
            }else{
                  this.tail.next = node;
                  this.tail = node;
            }
            this.size++;
      }

      removeFromFront(){
            if(this.isEmpty()){
                  return null;
            }else{
                  const value = this.head.value;
                  this.head = this.head.next;
                  this.size--;
                  return value;
            }
      }

      removeFromEnd(){
            if(this.isEmpty()){
                  return null;
            }
            const value = this.tail.value;
            // if list only have one node
            if(this.size === 0){
                  this.head = null;
                  this.tail = null;
            } else{
                  let prev = this.head;
                  while(prev.next !== this.tail){
                        prev = prev.next;
                  }
                  // remove tail element
                  prev.next = null;
                  this.tail = prev;
                  this.size--;
                  return value;
            }
      }

      print(){
            if(this.isEmpty()){
                  console.log('The list is empty')
                  return null;
            }else{
                  let curr = this.head;
                  let listValues = '';
                  while(curr){
                        listValues += `${curr.value} `;
                        curr = curr.next;
                  }
                  console.log(listValues);
            }          
      }
}

const list = new LinkedList();
console.log('List is empty ', list.isEmpty());
console.log('List Size ',list.getSize());
list.print();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
console.log('List Size ',list.getSize());
list.print();

console.log(list.removeFromEnd());
list.print(); // 0 1 2 

console.log(list.removeFromFront());
list.print(); // 1 2