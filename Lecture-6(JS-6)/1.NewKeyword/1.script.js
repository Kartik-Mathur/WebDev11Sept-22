function fun(name,activity,vehicle){
    this.name = name;
    this.activity = activity;
    this.vehicle = vehicle;
}       

let Garv =  new fun("Garv","Cricket","BMW");
// console.log(global.name,global.activity,global.vehicle);
let Bhawansh = new fun("Bhawansh","Maut ka kuan","Maruti-800");
// console.log(global.name,global.activity,global.vehicle);
let Ekta = new fun("Ekta","Nass Katna","E-Rickshaw");
// console.log(global.name,global.activity,global.vehicle);

console.log(Garv);
console.log(Bhawansh);
console.log(Ekta);
