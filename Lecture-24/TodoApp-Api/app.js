const express = require('express');
const app = express();
const PORT = 4444;
app.use(express.urlencoded({extended:true}));

let tasks = [];

app.get('/gettasks',(req,res,next)=>{
    res.send(tasks);
})
app.post('/addtask',(req,res,next)=>{
    // console.log(req.body.task);
    tasks.push(req.body.task);
    res.send('Task added successfully');
})
app.listen(PORT,()=>{
    console.log('server started at: '+PORT);
})