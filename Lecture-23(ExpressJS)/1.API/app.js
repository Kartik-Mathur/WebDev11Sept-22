const express = require('express');
const app = express();
const PORT = 4444;
const path = require('path');

app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

app.get('/hello',(req,res,next)=>{
    res.send('Hello '+req.query.name);
})

app.post('/hello',(req,res,next)=>{
    console.log(req.body);
    res.send("Hello from post request");
})

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})