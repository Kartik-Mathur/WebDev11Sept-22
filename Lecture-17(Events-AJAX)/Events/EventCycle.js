const grandfather = document.querySelector('#grandfather');
const father = document.querySelector('#father');
const mother = document.querySelector('#mother');

grandfather.addEventListener('click',(ev)=>{
    // ev.stopPropagation();
    console.log("Khaandan ka naam duba diya");
},true)

father.addEventListener('click',(ev)=>{
    // ev.stopPropagation();
    console.log("Tabiyat se sutaai");
},true)

mother.addEventListener('click',(ev)=>{
    // ev.stopPropagation();
    console.log("Rona shuru");
},true)