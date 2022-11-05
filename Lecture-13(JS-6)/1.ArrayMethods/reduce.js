const arr = [1,2,3,4,5];

// let sum = arr.reduce((accum,val)=>accum*val,1);
let sum = arr.reduce((accum,val)=>{
    return accum*val;
},1);
console.log(sum);