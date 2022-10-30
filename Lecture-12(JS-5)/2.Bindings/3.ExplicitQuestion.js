// Find the sum of arr in obj and obj1, using this binding in sum
// function
let obj = {
    arr: [1,2,3,4,5]
}

let obj1 = {
    arr: [10,20,30,40,50]
}

function sum(){
    console.log("Context",this);
    let ans = 0;
    let arr = this.arr;
    for(let i = 0; i < arr.length; i++){
        ans += arr[i];
    }
    console.log("Sum",ans);
}

sum.call(obj1);