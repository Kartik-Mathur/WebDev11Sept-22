const arr = [1,2,3,4,5];
const newarr = arr.map((val,indx,arr)=>{
    console.log("index:",indx,"val",val,"arr:",arr);
    return val+10;
})

console.log(newarr);
console.log(arr);