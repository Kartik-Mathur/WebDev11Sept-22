const file2 = require('./file2');

console.log("Inside file 1");

function subtract(a,b){
    return a-b;
}

// console.log(file2);
console.log(subtract(10,20));


module.exports.subtract = subtract;
module.exports.file2 = file2;

// module.exports = {
//     subtract, file2
// }



/*
const file2 = require('./file2');
// file2={add}
console.log("Inside file 1");

console.log(file2.add(10,20));
*/