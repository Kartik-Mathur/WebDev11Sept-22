let fun = ()=>{
    console.log("Hello World");
    console.log(this);
}

fun();

let person = (name,activity,vehicle) =>{
    console.log(name,activity,vehicle);
}

person("Garv","Cricket","BMW");
person("Bhawansh","Maut ka kuan","Maruti-800");