const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#btn1');

// console.log(btn);
btn.onclick = function(){
    console.log("Shooooouuuutttttttt!!!!!!");
}

btn1.onclick = function(){
    console.log("Screeeaaaaaammmmmmmmmm!!!!!!");
}

btn1.onclick = function(){
    console.log("Chilaaanaaaaaaaaaaaaaaa!!!!!!");
}

document.onkeyup = function(ev){
    console.log(ev);
    if(ev.key == 'k'){
        console.log('Kartik');
    }
}