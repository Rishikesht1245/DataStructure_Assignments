function isPowerOfTwo(n){
      if(n < 1){
            return false;
      }
      while(n>1){
            if(n%2 != 0){
                  return false;
            }
            n = n/2 // n divide by two every time.
      }
      return true;
}


console.log(isPowerOfTwo(1))//true
console.log(isPowerOfTwo(2))//true
console.log(isPowerOfTwo(5))//false

// Big - O = O(log n)

console.log('-----------------------------------------\n');
console.log('More precise way Using bit wise Operation');

function isPowerOfTwoBitWise(n){
      if(n< 1){
            return false;
      }
      return(n & (n-1)) === 0
}

console.log(isPowerOfTwo(1))//true
console.log(isPowerOfTwo(2))//true
console.log(isPowerOfTwo(5))//false