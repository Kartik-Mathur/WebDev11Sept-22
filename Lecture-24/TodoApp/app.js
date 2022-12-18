const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

let tasks = [];

app.get('/gettasks',(req,res,next)=>{
    res.send(tasks);
})

app.post('/addtask',(req,res,next)=>{
    tasks.push(req.body.task);
    res.redirect('/gettasks');
})
app.listen(PORT,()=>{
    console.log('server started at: '+PORT);
})