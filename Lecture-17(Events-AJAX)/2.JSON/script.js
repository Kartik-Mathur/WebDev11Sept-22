// let person = {
//     name:"Bhawansh",
//     age:20,
//     hobby:["Maut ka Kuaan","Nass Katwana","Rassi par chalana"]
// };

let person = 
[
    {
        name:"Bhawansh",
        age:20,
        hobby:["Maut ka Kuaan","Nass Katwana","Rassi par chalana"]
    },
    {
        name:"Bhawansh",
        age:20,
        hobby:["Maut ka Kuaan","Nass Katwana","Rassi par chalana"]
    },
    {
        name:"Bhawansh",
        age:20,
        hobby:["Maut ka Kuaan","Nass Katwana","Rassi par chalana"]
    }
];

let personJSON = JSON.stringify(person);
console.log(person);
console.log(personJSON);
let newPerson = JSON.parse(personJSON);
console.log(newPerson)