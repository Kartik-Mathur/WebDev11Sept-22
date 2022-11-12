const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#btn1');

function scream(ev){
    // console.log(ev);
    console.log("Screaaaaaammmmmmmmm!!!!!");
}

function shout(ev){
    // console.log(ev);
    console.log("Shouttttttttttttt!!!!!");
}
// This is how to apply multiple events to same element
btn.addEventListener('click',scream);
btn.addEventListener('click',shout);
btn.removeEventListener('click',shout);

// btn.addEventListener('click',(ev)=>{

// });