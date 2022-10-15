function add(a,b){
    return a+b;
}


function printNumber(n){
    console.log(n); // [Function: add]
}

printNumber(add(10,20));
// console.log(typeof add);