function add(a,b,c){
    return a+b+c;
}
// We will have to keep on adding the parameters
// in add function if we will increase the
// data we pass as arguments
console.log(add(10,20,30));


function add1(a,b,...args){
    // console.log(args);
    let sum = args.reduce((accum,val)=>accum+val,0);
    return sum+a+b;
}

console.log(add1(10,20,30,40,50));