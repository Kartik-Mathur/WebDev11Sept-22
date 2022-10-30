let x = {
    a: function(){
        console.log("Inside x object",this);
    },
    b: true
};

let y = {
    c: function(){
        console.log("Inside y object",this);
    },
    d: 'Hello'
};

function fun(){
    console.log("Currently context is",this);
}
// fun();
fun.call(y);

// x.a(); // this--> x
// y.c(); // this--> y
