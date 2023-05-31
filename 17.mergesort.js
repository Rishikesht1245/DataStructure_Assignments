function mergeSort(arr){
      if(arr.length < 2){
            return arr;
      }
      const mid = Math.floor((arr.length)/2);
      const leftArr = arr.slice(0, mid);
      const rightArr = arr.slice(mid);
      return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr){
      const sortedArr = [];
      while(leftArr.length && rightArr.length){
            if(leftArr[0]<= rightArr[0]){
                  //pushing and removing (shift remove the element)
                  sortedArr.push(leftArr.shift())
            } else{
                  sortedArr.push(rightArr.shift());
            }
      }
      //merging order is important here
      return [...sortedArr,...leftArr,...rightArr];
}
const arr = [8,20,-2,4,-6];
console.log(mergeSort(arr));