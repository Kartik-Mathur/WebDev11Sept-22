const arr = [1,2,3,4,5];

Array.prototype.myreduce = function(Fun,accumInitial){
    let arr = this;
    let startIndex = 0;

    if(accumInitial == undefined){
        accum = arr[0];
        startIndex = 1;
    }
    else{
        accum = accumInitial;
    }
    
    for(let i = startIndex ; i < arr.length ; i++){
        accum = Fun(accum,arr[i],i,arr);
    }
    return accum;
}

Array.prototype.myreduce1 = function(Fun,accumInitial){
    let arr = this;
    let startIndex = 0;
    let accum;
    for(let i = startIndex ; i < arr.length ; i++){
        accum = (accum == undefined)? arr[0]:Fun(accum,arr[i],i,arr);
    }
    return accum;
}

const sum = arr.myreduce1((accum,initialval,indx,arr)=>{
    return accum + initialval;
})

console.log(sum);
console.log(arr);