// Understanding Prototype chaining
function student(name,marks){
    this.name = name;
    this.marks = marks;

    return 10;
}

let s1 = new student("Harish",88);
let s2 = new student("Suresh",98);

console.log(s1);
console.log(s2);
console.log(s1.__proto__ == student.prototype);

// console.log(s1.__proto__.__proto__ ==  Function.prototype);