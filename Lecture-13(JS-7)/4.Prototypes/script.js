function fun(){
    console.log("Hello World");
}

fun();
fun.marks = 99;
console.log(fun);
fun();
console.log(fun.marks);