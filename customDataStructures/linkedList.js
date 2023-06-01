// initial structure of a node.
class Node{
      constructor(value){
            this.value = value;
            this.next = null;
      }
}

class LinkedList{
      // when inserting the first node, keeping the head empty.
      constructor(){
            this.head = null;
            this.size = 0;
      }

      isEmpty(){
           return this.size === 0; 
      }

      getSize(){
            return this.size;
      }

      prepend(value){
            const node = new Node(value);
            // empty list 
            if(this.isEmpty()){
                  // setting head node as the newly created node.
                  this.head = node;
            }else{
                  // setting new nodes next to the head node
                  node.next = this.head;
                  //assigning new node as the new head node
                  this.head = node;
            }
            this.size++;
      }

      append(value){
            const node = new Node(value);
            if(this.isEmpty()){
                  this.head = node;
            }else{
                  let prev = this.head;
                  // traverse until prev.next points to null
                  while(prev.next){
                        prev = prev.next;
                  }
                  // after reching the last node attach the new node
                  prev.next = node; 
            }
            this.size++;

      }

      insert(value, index){
            if(index<0 || index > this.size){
                  console.log('Invalid index')
                  return;
            }
            // we already have method to insert new node at start
            if(index === 0){
                  this.prepend(value);
            }
            //both index is valid and greater than 0
            else{
                  const node = new Node(value)
                  let prev = this.head;
                  // travers till we reach the prev node of index
                  for(let i = 0; i < index-1; i++){
                        prev = prev.next;
                  }
                  // at previous node of index new node point to nexto node
                  node.next = prev.next;
                  // prev node's next point to new node
                  prev.next = node;
                  this.size++;
            }     
      }

      removeFrom(index){
            if(index <0 || index >= this.size){
                  console.log('Index is invalid');
                  return null;
            } 
            // temporary holder
            let removeNode;
            if(index === 0){
                  removeNode = this.head;
                  this.head = this.head.next;
            } else{
                  let prev = this.head;
                  for(let i = 0; i < index-1; i++){
                        prev = prev.next
                  }
                  // detach the removeNode from the list.
                  removeNode = prev.next;
                  prev.next = removeNode.next
            }
            this.size--;
            return removeNode.value;
      }

      removeValue(value){

            if(this.isEmpty()){
                  console.log('List is empty')
                  return null;
            }
            if(this.head.value === value){
                  this.head = this.head.next;
                  this.size--;
                  return value;
            }else{
                  let prev = this.head;
                  while(prev.next && prev.next.value !== value){
                        prev = prev.next;
                  }
                  if(prev.next){
                        const removeNode = prev.next;
                        prev.next = removeNode.next;
                        this.size--
                        return value;
                  }
                  // if value is not found
                  return null;
            }
      }

      search(value){
            if(this.isEmpty()){
                  console.log('List is empty')
                  return -1;
            } 
            let i =0;
            let curr = this.head;
            while(curr){
                  if(curr.value === value){
                        return i;
                  }
                  curr = curr.next;
                  i++;
            }
            return -1;
      }

      reverse(){
            let prev = null;
            let curr = this.head;
            while(curr){
                  let next = curr.next; // 2nd node
                  curr.next = prev;
                  prev = curr;
                  curr = next;
            }
            this.head = prev;
      }

      print(){
            if(this.isEmpty()){
                  console.log('The list is empty');
            }else{
                  let curr = this.head;
                  let listValues = "";
                  // while curr is not pointing to null
                  while(curr){
                        listValues += `${curr.value} `;
                        curr = curr.next;
                  }
                  console.log(listValues);
            }
      }
}


const list = new LinkedList();
list.insert(10, 0);
list.insert(20,0);
list.insert(30,2);
list.insert(40,3);
list.print();
list.reverse();
list.print();