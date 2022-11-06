let obj = {
    a: "Hello",
    b: true
};

obj.obj = obj;
console.log(obj);
console.log(obj.obj);
console.log(obj.obj.obj.obj.obj.obj.obj);
