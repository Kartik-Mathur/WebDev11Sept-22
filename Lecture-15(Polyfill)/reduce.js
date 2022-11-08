const arr = [1,2,3,4,5];
const sum = arr.reduce((accum,initialval,indx,arr)=>{
    return accum + initialval;
},0)

console.log(sum);
console.log(arr);