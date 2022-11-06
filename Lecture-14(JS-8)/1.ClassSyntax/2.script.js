class Student{
    constructor(name,marks,age){
        this.name = name;
        this.marks = marks;
        this.isBaalik = function(){
            return age>18;
        }
    }

    printMarks(){
        console.log(this.name,"ke marks:",this.marks);
    }

    get number(){
        return this.marks;
    }

    set number(n){
        this.marks = n;
    }

    static schoolName(){
        return "Mount Abu";
    }
}

let s1 = new Student("Harish",88,22);
let s2 = new Student("Suresh",98,10);

console.log(s1);
console.log(s2);
console.log(s1.__proto__ == Student.prototype);
s1.printMarks();
s2.printMarks();

console.log(s1.number);
s1.number = 100;
console.log(s1);

console.log(Student.schoolName());
// console.log(s1.schoolName()); // Not allowed

console.log(s1.isBaalik());
console.log(s2.isBaalik());
console.log(s2.age);