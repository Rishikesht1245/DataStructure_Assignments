class HashTable{
      constructor(size){
            this.table = new Array(size);
            this.size = size;
      }
      // hash method convert key to numberic index
      hash(key){
            let total = 0;
            for(let i =0; i < key.length; i++){
                  total += key.charCodeAt(i);
                  
            }
            // to make the array index bound with the total size.
            return total % this.size;
      }  
      
      set(key, value){
            const index = this.hash(key);
            // this.table[index] = value;

            const bucket = this.table[index];
            if(!bucket){
                  this.table[index] = [[key, value]];
            } else{
                  const sameKeyItem = bucket.find(item => item[0] === key);
                  if(sameKeyItem){
                        // if key is same replace the current value.
                        sameKeyItem[1] =  value;
                  }else{
                        // else push it to the bucket.
                        bucket.push([key, value]);
                  }
            }
      }
      
      get(key){
            const index = this.hash(key);
            // return this.table[index];
            const bucket = this.table[index];
            if(bucket){
                  const sameKeyItem = bucket.find(item => item[0] === key)
                  if(sameKeyItem){
                        return sameKeyItem[1];
                  }
            }
            return undefined;
      }

      remove(key){
            const index = this.hash(key);
            // return this.table[index] = undefined;

            const bucket = this.table[index];
            if(bucket){
                  const sameKeyItem = bucket.find(item => item[0] === key)
                  if(sameKeyItem){
                        bucket.splice(bucket.indexOf(sameKeyItem), 1)
                  }
            }
      }

      display(){
            for(let i = 0; i < this.table.length; i++){
                  if(this.table[i]){
                        console.log(i, this.table[i])
                  }
            }
      }
}
const table = new HashTable(50);
table.set("name", "Rishi");
table.set("age" , 22);
console.log(table.get("age")); 
table.set("mane","Hams");
table.set("name","Hams");
table.display();

// for name and mane the index will be same after hashing, since we are using 
// simple charCodeAt function.