const file1 = require('./file1');

console.log("Inside file 2");

function add(a,b){
    return a+b;
}

// console.log(file1);
console.log(add(10,20));


module.exports.add = add;
module.exports.file1 = file1;

// module.exports = {
//     add, file1
// }

// module.exports = add;