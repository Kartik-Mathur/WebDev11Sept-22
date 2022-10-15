// Function is returned as value 
// function avengers() {
//     console.log("I am Inside Avengers Function");
//     function ironMan(){
//         console.log("I am IronMan");
//     }

//     return ironMan();
// }

// let ironman = avengers(); // ironMan is a function
// console.log(ironman);

// Function ko pass as an argument
function avengers(x){
    x(); // x needs  to be a function
}

function ironMan(){
    console.log("I am IronMan");
}

// avengers(ironMan()); // Yeh nahi chlega,  because ironMan returns
// undefined
avengers(ironMan); // Yeh nahi chlega

// avengers(function(name){
//     console.log("I am",name);
// });