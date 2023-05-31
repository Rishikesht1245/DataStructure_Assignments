function fibonacci(n){
      const fib = [0,1] // initalising the first two numbers
      for(let i = 2; i< n; i++){
            fib[i] = fib[i-1]+ fib[i-2]
      }
      return fib;
}

console.log(fibonacci(2))
console.log(fibonacci(6))
console.log(fibonacci(5))

// complexity Big O will be O(n)