const arr = [1,2,3,"Rishi"];

// adding element to the end
arr.push(4)  

// adding element to the beginning
arr.unshift(0);  // [0,1,2,3,"Rishi",4];

//remove element from the end
arr.pop();   // [0,1,2,3,"Rishi"];

// remove element from the beginning
arr.shift();   // [1,2,3,"Rishi"];

//Iteration
for(const item of arr){
      console.log(item)  // [1,2,3,"Rishi"];
}

// map, filter, reduce, concat, slice and splice are also other methods