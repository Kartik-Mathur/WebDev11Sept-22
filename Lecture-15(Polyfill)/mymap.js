const arr = [1,2,3,4,5];

Array.prototype.mymap = function(Fun){
    let arr = this;
    let anotherArr = [];
    for(let i = 0 ; i < arr.length ; i++){
        anotherArr.push(Fun(arr[i],i,arr));
    }
    return anotherArr;
}

const newarr = arr.mymap((val,indx,arr)=>{
    console.log("index:",indx,"val",val,"arr:",arr);
    return val+10;
})

console.log(newarr);
console.log(arr);