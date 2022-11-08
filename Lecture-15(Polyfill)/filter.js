const arr = [1,2,3,4,5];
const newarr = arr.filter((val,indx,arr)=>{
    console.log("index:",indx,"val",val,"arr:",arr);
    if(val%2 == 0) return true;
    return false;
})

console.log(newarr);
console.log(arr);