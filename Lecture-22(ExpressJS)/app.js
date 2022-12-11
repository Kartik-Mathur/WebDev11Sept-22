const express = require('express');
const app = express();
const PORT = 4444;
const path =  require('path');

app.use('/mustwatch',express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
})

app.get('/salutation/:name',(req,res)=>{
    let name = req.params.name;
    res.send(`<h1>Hello! Good Morning ${name}</h1>`);
});

// http://localhost:4444/movie?name=Avengers&hero=Hulk
app.get('/movie',(req,res)=>{
    res.send(`Movie you searched: ${req.query.name}, ${req.query.hero}`)
})

// app.get('/mustwatch',(req,res)=>{
//     // console.log(__dirname);
//     let file = path.join(__dirname,'/index.html');
//     res.sendFile(file);
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/style.css');
// })

// app.get('/printHello.js',(req,res)=>{
//     res.sendFile(__dirname+'/printHello.js')
// })

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})