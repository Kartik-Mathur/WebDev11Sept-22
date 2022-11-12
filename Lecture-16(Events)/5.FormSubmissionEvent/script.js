const form = document.querySelector('form');

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    console.log(document.querySelector('#name').value);
    console.log(document.querySelector('#password').value);
    
})

