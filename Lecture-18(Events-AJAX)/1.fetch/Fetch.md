   
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

```
<h1>Cat Facts</h1>
<input type="text" id="factsCount">
<button id="btn">Get Facts</button>

<ul id="facts"></ul>

<script src="./script2.js"></script>
```