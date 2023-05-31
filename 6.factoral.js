function factoral(n){
      let res = 1;
            for(let i = 2; i<=n; i++){
                  res*= i;
            }
            return res;
}

console.log(factoral(0)) //1
console.log(factoral(4)) //24
console.log(factoral(6)) //720

// Big - O will be O(n)