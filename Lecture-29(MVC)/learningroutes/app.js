const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const path = require('path');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,'static')));
app.set('view engine','hbs');
app.use(express.urlencoded({extended: true}));

hbs.registerPartials(__dirname + '/views/partials');

const studentsHandler = require('./routes/students');
// Lets separate the requests according to path
// Students ki request students.js par jaaye
app.use('/students', studentsHandler);
// Teachers ki request teachers.js par jaaye
app.use('/teachers', require('./routes/teachers'));


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})