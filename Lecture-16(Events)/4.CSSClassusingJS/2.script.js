const div = document.querySelector('#div');
const btn = document.querySelector('#btn');
let counter = 0;
btn.addEventListener('click',()=>{
    // div.innerText = 'Changing the text on click';
    div.innerText = `${counter}`;
    counter++;
})

