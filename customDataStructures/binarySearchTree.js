class Node{
      constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
      }
}

class BinarySearchTree{
      constructor(){
            this.root = null;
      }

      isEmpty(){
            return this.root === null;
      }

      insert(value){
            const newNode = new Node(value);
            if(this.isEmpty()){
                  this.root = newNode;
            } else{
                  this.insertNode(this.root, newNode);
            }
      }

      //we need to recursively call this method.
      insertNode(root, newNode){
            // if node value is lesser than root value focus on left childs
            if(newNode.value < root.value){
                  if(root.left === null){
                        root.left = newNode;
                  }else{
                        //(if root has left child alredy then we need to recursively call  the function with left child )
                        return this.insertNode(root.left, newNode);
                  }
            } else{
                  if(root.right === null){
                        root.right = newNode;
                  } else{
                        // if root already has a right child then we need to recursively call the function.
                        return this.insertNode(root.right, newNode);
                  }

            }
      }
        
      search(root, value){
            // if tree is empty
            if(!root){
                  console.log('The value does not exist in the tree');
                  return false;
            }
            // if tree is not empty
            if(root.value === value){
                   return true;
             }else if(value < root.value){
                   return this.search(root.left, value);     
             }else{
                   return this.search(root.right, value);
             }
      }

      // DFS preorder Traversal
      preOrder(root){
            if(root){
                  console.log(root.value);
                  this.preOrder(root.left);
                  this.preOrder(root.right);
            }

      }

      inOrder(root){
            if(root){
                  //reaches until the left leaf node
                  this.inOrder(root.left);
                  // console starts from the left leaf node till top left node
                  console.log(root.value);
                  this.inOrder(root.right);
            }
      }

      postOrder(root){
            if(root){
                  this.postOrder(root.left);
                  this.postOrder(root.right);
                  console.log(root.value);
            }
      }

      // depth First Search
      levelOrder(root){
            // use the optimized queue implementation
            const queue = []
            // root element is pushed into the queue
            queue.push(this.root)
            // if there is nodes in queue
            while(queue.length){
                  let curr = queue.shift();
                  console.log(curr.value);
                  // if there is left child for node
                  if(curr.left){
                        queue.push(curr.left);
                  }
                  // if right child exits
                  if(curr.right){
                        queue.push(curr.right);
                  }
            }
      }

      min(root){
            if(!root.left){
                  return root.value;
            } else{
                  // recursively call the min function until we reach the left leaf node
                  return this.min(root.left);
            }
      }

      max(root){
            if(!root.right){
                  return root.value;
            } else{
                  return this.max(root.right);
            }
      }

      delete(value){
            this.root = this.deleteNode(this.root, value);
      }

      deleteNode(root, value){
            if(root === null){
                  return root;
            }
            if(value < root.value){
                  root.left = this.deleteNode(root.left, value);
            } else if(value > root.value){
                  root.right = this.deleteNode(root.right, value);
            } else{
                  if(!root.left && !root.right){
                        return null;
                  }
                  if(!root.left){
                        return root.right;
                  } else if(!root.right){
                        return root.left;
                  }
                  root.value = this.min(root.right);
                  root.right = this.deleteNode(root.right, root.value);
            }
            return root;
      }
}


    
const bst = new BinarySearchTree();
console.log(bst.isEmpty()); // true
// insertion
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

bst.levelOrder(bst.root);

bst.delete(10);
console.log("--------Tree after Deletion--------------")
bst.levelOrder(bst.root);
