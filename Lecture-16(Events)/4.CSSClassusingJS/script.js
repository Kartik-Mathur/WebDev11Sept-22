const div = document.querySelector('#div');

// First way to add CSS(Ghatiya way)
// div.style.border = '1px solid black';
// div.style.border = '5px solid black';

// second way
// div.classList.add('border');
setInterval(()=>{
    div.classList.toggle('border');
    // div.classList.toggle('bgColorBlack');

},100);
