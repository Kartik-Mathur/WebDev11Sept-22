// Yeh banaya sabse pehle ajax ko bhejne ke liye object xhr
const xhr  = new XMLHttpRequest();

// Agar request success ho gai toh hum, onload chalenge event
xhr.onload = function(){
    let ul = document.querySelector('#facts');
    console.log("Success par this",this.response);
    let jsonData = this.response;
    let catFacts = JSON.parse(jsonData);
    console.log(catFacts);
    catFacts.forEach(data => {
        // console.log(data);
        let fact = data.text;
        console.log(fact);   
        let li = document.createElement('li');
        li.innerText = fact;
        li.classList.add('fact-li');
        ul.appendChild(li);
    });
}

// Agar request fail ho gai toh hum, onerror chalenge event
xhr.onerror = function(){
    console.log("Error aa gaya");
}

// Rquest kis URL par jaegi usko set karo
xhr.open("GET","https://cat-fact.herokuapp.com/facts");

// Ab request ko bhejdo
let btn = document.querySelector('#btn');
btn.addEventListener('click',(ev)=>{
    xhr.send();
})
