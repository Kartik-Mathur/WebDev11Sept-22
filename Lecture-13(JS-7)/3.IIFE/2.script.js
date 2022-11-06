let student = (function(name,marks,address){
    name = name;
    marks = marks;
    address = address;
    function updateaddress(newAddress){
        address = newAddress;
    }

    return {name,address,updateaddress};
})("Abhinav",9.4,"South Moti Baagh");


console.log(student);
// student.updateaddress("South Moti Baagh");
// console.log(student);