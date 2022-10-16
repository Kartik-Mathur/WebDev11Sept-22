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

console.log(fun1());
console.log(fun1());
console.log(fun1());
console.log(fun2());
console.log(fun2());
