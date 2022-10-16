function outerFun(){
    let a = 1;
    function innerFun(){
        a++;
        return a;
    }

    return innerFun;
}

let fun1 = outerFun();
let fun2 = outerFun();

console.log(fun1()); // 2 2 2 2
console.log(fun1()); // 3 2 2 3 
console.log(fun1()); // 4 2 2 4
console.log(fun2()); // 2 3 2 5