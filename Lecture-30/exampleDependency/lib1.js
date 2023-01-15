const lib2 = require('./lib2');
console.log("Inside library1");

function BhawanshAndIsha(){
    console.log("Koshish jaari thi");
}

function EktaAndFriends(){
    console.log("Nass Kaat l/dungi");
}

module.exports.EktaAndFriends = EktaAndFriends;
module.exports.BhawanshAndIsha = BhawanshAndIsha;
module.exports.lib2 = lib2;

// module.exports = {
//     EktaAndFriends,
//     BhawanshAndIsha,
//     lib2
// }