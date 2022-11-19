const container = document.querySelector('.container');

for(let i = 1; i <= 100 ; i++){
    let div = document.createElement('div');
    div.innerText = i;
    div.setAttribute('id',i);
    div.classList.add('div');
    container.appendChild(div);
}