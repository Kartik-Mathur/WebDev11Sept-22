/*console.log(this);  // Window(Browser), global(nodejs)
a = 10;

let obj = {
    fun: function(){
        console.log("current context",this);
    },
    a: 'Hello',
    b: true
}

obj.fun();*/

// QUESTION
/*function hello(){
    console.log("Hello ka this",this);
}

hello();*/

let x = {
    a: function(){
        console.log(this);
    },
    b: true
}

x.a();