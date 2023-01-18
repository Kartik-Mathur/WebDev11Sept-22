class Student{
    constructor(name,age,hobby,marks){
        this.name = name;
        // this.age = age;
        this.isBaalik = function(){
            return age >= 18;
        }
        this.hobby = hobby;
        this.marks = marks;
    }   

    getHobby(){
        return this.hobby;
    }

    updateHobby(newHobby){
        this.hobby = newHobby
    }

    static getCountry(){
        return "India";
    }

    get number(){
        return this.marks;
    }
    set number(newMarks){
        this.marks = newMarks;
    }
}


let s1 = new Student("Abhinav",19,"Table Tennis",70);
let s2 = new Student("Apurba Koley",17,"Chess",60);
let s3 = new Student("Bhawansh",20,"Chess",80);
console.log(s1.number);
s1.number = 100;
console.log(s1.number);

// console.log(Student.getCountry());
// console.log(s1.getHobby());
// console.log(s2.isBaalik());
// console.log(s3.getHobby());
// s3.updateHobby("Gaming");
// console.log(s3.getHobby());
// console.log(s1.__proto__);
// console.log(s1.__proto__ == Student.prototype);