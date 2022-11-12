// Sabse pehle vo buttons uthaao jispar  event lagana hai
// can be done with class too
const buttons = document.querySelectorAll('button');

for(let btn of buttons){
    btn.addEventListener('click',(ev)=>{
        console.log("Click kia hai",ev.target.innerText);
    })
}

