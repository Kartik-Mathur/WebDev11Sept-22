const lib1 = require('./lib1');
console.log("Inside library2");

function jeeneNahiDunga(){
    console.log("Watching movie of a lifetime");
}

function bahubali(){
    console.log("Better than jeene nahi dunga");
}

module.exports.jeeneNahiDunga = jeeneNahiDunga;
module.exports.bahubali = bahubali;
module.exports.lib1 = lib1;

// module.exports = {
//     jeeneNahiDunga,
//     bahubali,
//     lib1
// }