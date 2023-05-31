function recurciveFibonacci(n){
      if(n<2){
            return n;
      }
      return recurciveFibonacci(n-1)+ recurciveFibonacci(n-2);
}

console.log(recurciveFibonacci(0))// 0
console.log(recurciveFibonacci(1))// 1
console.log(recurciveFibonacci(3))// 2