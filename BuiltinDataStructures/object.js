const obj = {
      name:"Rishi",
      age:22,
      // mehtod
      myName:function(){
            console.log(this.name)
      }
}

// adding new key value pair
obj.hobby = "Football"

//deleting key value pair from object
delete obj.hobby;

//accessing values
console.log(obj.name)
// accessing using bracket notation (used when key contains spaces)
console.log(obj['age'])
obj.myName();
console.log(obj) //{ name: 'Rishi', age: 22, hobby: 'Football' }


// Object.keys, .values, .entries -- returns keys, values, and key value pairs in array format