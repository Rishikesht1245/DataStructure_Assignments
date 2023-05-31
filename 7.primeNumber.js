function isPrime(n){
      if(n<2){
            return false;
      } 
      for(let i = 2; i<=Math.sqrt(n); i++){ // if n is 24 sqrt will be 4.6 so we only need to check until 4
            if(n%i===0){
                  return false;
            }
      }
      return true; // if for loop doesn't return fale
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false

// Big-O = O(n)