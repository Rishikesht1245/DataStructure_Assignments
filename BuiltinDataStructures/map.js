const map = new Map([['a',1], ['b',2]])

//add a new value
map.set('c',3);

// delete a key value pair
map.delete('c')

//exist 
console.log(map.has('a'));

// size
console.log(map.size);

// clear everythin
map.clear();

for(const [key, value] of map){
      console.log(`${key} : ${value}`)
}