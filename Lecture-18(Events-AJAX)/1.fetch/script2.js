const btn = document.querySelector('#btn');
const factsList = document.querySelector('#facts');
const factsCount = document.querySelector('#factsCount');

function getFacts(n) {
    return new Promise((resolve, reject) => {
        const URL = `https://meowfacts.herokuapp.com/?count=${n}`
        fetch(URL)
            .then((response) => {
                // We get data in chunks so we first read the entire
                // data and then return it
                return response.json();
            })
            .then((result) => {
                // console.log(result.data);
                const facts = result.data;
                resolve(facts);
            })
    })
}

btn.addEventListener('click', (ev) => {
    console.log('btn clicked');
    if (factsCount.value == '') return alert("Sahi value daal");
    const n = Number(factsCount.value);
    if (!n) return alert("Tune number nahi daala, sahi value daal");

    /*
    Yaha dikkat thi kyunki fetch ek asyn function tha
    aur vo undefined return kar rha tha.
    Toh facts nahi aaye and code kaam nahi kara, 
    we used promise in getFacts() to help with actual
    data return
    
    const facts = getFacts(n);
    facts.forEach(fact => {
        let li = document.createElement('li');
        li.innerText = fact;
        factsList.appendChild(li);
    });
    */

    getFacts(n)
        .then((facts) => {
            factsList.innerText = '';
            console.log(facts);
            facts.forEach(fact => {
                let li = document.createElement('li');
                li.innerText = fact;
                factsList.appendChild(li);
            });
        })
        .catch(err => console.log(err));
})