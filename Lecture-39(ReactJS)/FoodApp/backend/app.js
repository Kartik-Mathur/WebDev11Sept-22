const express = require('express');
const Foods = require('./model/Food');
const app = express();
const PORT = 4444;

require('./db/seed');
var cors = require('cors')
app.use(cors());

app.get('/',async (req,res)=>{
    try{
    let foods = await Foods.find();
    res.status(200).json(foods);
    }
    catch(e){
        res.status(500).json({message: 'Not able to find food'});
    }
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})