const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("Checking valid user");
    next();
});

// /compress
// /compress/abc
// /compress/abc/img
// /compress/abc/img/...../xyz
app.use('/compress',(req,res,next)=>{
    console.log("Middleware-2");
    next();
});

app.get('/',(req,res,next)=>{
    res.send('Hello');
})

app.get('/compress',(req,res,next)=>{
    res.send('Hello doing compression');
})

app.get('/compress/abc',(req,res,next)=>{
    res.send('Hello doing compression');
})

app.get('/compress/abc/img',(req,res,next)=>{
    res.send('Hello doing compression');
})



app.listen(4444,()=>{
    console.log('server started at:'+4444);
})