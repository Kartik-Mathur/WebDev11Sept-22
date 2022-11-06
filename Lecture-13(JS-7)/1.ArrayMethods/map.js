const arr = [1,4,9,16,25];

let computedArray = arr.map((val,indx,arr)=>{
    return Math.sqrt(val);
})

let newArr = arr.map((val,indx,arr)=>Math.cbrt(val));

console.log(computedArray);
console.log(newArr);
console.log(arr);