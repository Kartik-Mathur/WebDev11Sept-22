/*
function HelloWorld(){
    console.log("Hello World");
}

console.log(HelloWorld());


function add(a,b){
    console.log("Sum: ",a+b);
}

add(10,20);

function sub(a,b){
    return a-b;
}
let ans = sub; // sub function as a value assign hoga 
let ans = sub(10,5); // value return hogi sub function se vo aaegi
console.log();

function concat(a,b){
    return a + b;
}

console.log(concat("Hello World! ","Learning Strings."));
*/

// 2nd way of creating functions
let whatDogSays = function dog(){
    console.log("Dog says Woof Woof");
}

whatDogSays();
// dog(); // This won't work, because this is now a value that is assigned
// to whatDogSays variable

let whatCatSays = function(a){
    console.log("Cat says",a);
}

whatCatSays("Meoow Meoow");

function Rooster(){
    console.log("Kukdookoo");
}

let whatRoosterSays = Rooster;
whatRoosterSays();