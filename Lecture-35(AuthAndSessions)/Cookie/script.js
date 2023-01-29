const express = require('express');
const app = express();
const PORT = 4444;
app.get('/',(req,res)=>{
    res.setHeader('Set-Cookie','loggedIn=true;');
    res.setHeader('Set-Cookie','admin=false;');
    res.send('Welcome to the app for the first time!');
})

app.get('/profile',(req,res)=>{
    console.log(req.get('Cookie'));
    let str = req.get('Cookie');
    const val = str.split(';')[1].split('=')[1];
    if(val == 'true')
        res.send('Here is your profile');
    else
        res.send('You need to login first');
})


app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})