const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
let arr = [];
for (let i = 1; i <= 10; i++) {
    let div = document.createElement('div');
    arr.push(i);
    div.innerText = i;
    div.setAttribute('id', 'item-' + i);
    div.classList.add('div');
    container.appendChild(div);
}
// button click hone par ek number array se hatt jaaye,
// aur uska color change ho jaaye screen par
btn.addEventListener('click', (ev) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(randomIndex);
    // Random index wala element array se hatt jaaye
    // aur is index ke element ka color page par change kro
    let itemId;
    if (arr.length > 0) {
        arr = arr.filter((v, indx) => {
            if (indx == randomIndex) {
                itemId = arr[randomIndex];
                let item = document.querySelector('#item-' + itemId);
                console.log(item);
                item.classList.add('changeColor');
                item.classList.add('gayab');
                return false;
            }
            return true;
        })
        // console.log(arr);
    }
    else{
        container.innerText = 'GAME OVER';
        btn.classList.add('gayab');
    }
})