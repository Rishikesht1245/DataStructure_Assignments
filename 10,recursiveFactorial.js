// figure out how to break down the problem to small problems
// find the base case

function recursiveFactorial(n){
      if(n>1){
            return n*recursiveFactorial(n-1)
      }
      return 1;
}

console.log(recursiveFactorial(0)) //1
console.log(recursiveFactorial(3)) //1
console.log(recursiveFactorial(5)) //120

//Big O - O(n)