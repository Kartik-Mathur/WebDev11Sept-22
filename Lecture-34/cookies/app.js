const express = require('express');
const app = express();
const PORT = 4444;
app.get('/',(req,res)=>{
    // res.cookie('loggedIn','true');
    console.log(res.get('name'));
    res.setHeader('Set-Cookie',"name=ABC");
    res.send('Hello');
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})