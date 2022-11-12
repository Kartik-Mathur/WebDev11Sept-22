const container = document.querySelector('.container');

container.addEventListener('click',(ev)=>{
    if(ev.target.localName == 'button')
        ev.target.classList.toggle('changeColor');
})