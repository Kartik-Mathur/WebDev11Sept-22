function outerFun(){
    let a = 1;
    function innerFun(){
        a++;
        function innerMostFun(){
            a++;
            return a;
        }
        return innerMostFun;
    }
    return innerFun;
}
let FunGen1 = outerFun();
let fun1 = FunGen1();
let fun2 = FunGen1();

console.log(fun1()); // 4 3 3 3 4
console.log(fun1()); // 5 5 4 4 5
console.log(fun1()); // 6 7 5 5 6
console.log(fun2()); // 4 3 6 4 7
console.log(fun2()); // 5 5 7 5 8
