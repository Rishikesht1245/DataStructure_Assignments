const set = new Set([1,2,3]) // initialized from set constructor

//adding a new value duplicate values are ignored.
set.add(4);

//to check a value exist or not
console.log(set.has(4)) // true

//delete a value from a set
set.delete(4);

//check the number of items
console.log(set.size)

//to clear all values from set
set.clear();

for(const item of set){
      console.log(item);
}