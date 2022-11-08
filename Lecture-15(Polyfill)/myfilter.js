const arr = [1,2,3,4,5];

Array.prototype.myfilter = function(Fun){
    let arr = this;
    let anotherArray = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(Fun(arr[i],i,arr)==true)anotherArray.push(arr[i]);
    }
    return anotherArray;
}

const newarr = arr.myfilter((val,indx,arr)=>{
    console.log("index:",indx,"val",val,"arr:",arr);
    if(val%2 == 0) return true;
    return false;
})

console.log(newarr);
console.log(arr);