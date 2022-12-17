const express = require('express');
const app = express();

// Lets assume this middleware will decrypt the request,
// so that we can verify that user is authentic or not
// Global middlewares, they run for every request
app.use((req,res,next)=>{
    console.log("Checking valid user");
    next();
});

app.use((req,res,next)=>{
    console.log("Middleware-2");
    next();
});

app.use((req,res,next)=>{
    console.log("Middleware-3");
    next();
});

app.use((req,res,next)=>{
    console.log("Middleware-4");
    next();
});

app.get('/',(req,res,next)=>{
    res.send('Hello');
    next();
})

app.use((req,res,next)=>{
    console.log("Middleware-5");
    next();
});

// app.get('/',(req,res,next)=>{
//     res.send('Hello');
// })

app.listen(4444,()=>{
    console.log('server started at:'+4444);
})