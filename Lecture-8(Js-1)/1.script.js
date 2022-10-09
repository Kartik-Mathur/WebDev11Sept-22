// 'use strict';
let a = 'Hello World'
console.log(a)

b = 10
c = 20

console.log(b);
console.log(c);

const pi = 3.14;
console.log('pi:',pi);
console.log('pi: '+pi);

/////////////////////  OBJECT -  (Key,Value)
let person  =  {
    'firstName': 'Kartik',
    'lastName': "Mathur",
    'contact': 10
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.contact);
console.log(person['contact']);
console.log(person['firstName']);
console.log(person['lastName']);

// For-in loop
for(let key in person){
    console.log(key,':',person[key]);
}


let obj = {
    " ":'space',
    "Complete Name":'Kartik Mathur',
    '':'Empty String'
};
console.log(obj);
console.log(obj['']);
console.log(obj[' ']);
console.log(obj["Complete Name"]);
/////////////////////  !!!!OBJECT -  (Key,Value)


// Object --> Array/List
a = [1,2,3,4,5,'Hello',true];
console.log(a);


b = [1,2,3,4,5,6];
// b[0] += 1;
// b[1] += 1;
// b[2] += 1;
// b[3] += 1;
// b[4] += 1;
// b[5] += 1;
for(let i = 0 ; i < b.length ;i++){
    b[i]  += 10;
}
console.log(b);

// for-of loop
for(let e of b){
    e-=10;
    console.log(e);
}

console.log(b);

b.push(10); //Insert at the end
b.pop(); // Remove at the end

b.unshift(100); // Insert at the front;
b.shift(); // Remove at the front;

b[10] = 100; // Possible hai yeh karna 
console.log(b);
