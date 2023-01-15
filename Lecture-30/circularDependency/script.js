let obj = {
    a: 10,
    b: true
}

obj.obj = obj;

console.log(obj);
console.log(obj.obj);
console.log(obj.obj.obj);