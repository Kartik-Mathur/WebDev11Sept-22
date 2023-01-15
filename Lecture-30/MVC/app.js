const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const path = require('path');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','hbs');
app.use(express.urlencoded({extended: true}));

hbs.registerPartials(__dirname + '/views/partials');

// HANDLING REQUESTs
const mainHandler = require('./routes/main');
app.use('/',mainHandler);

// BLOGS CRUD Operation handler
const blogsHandler = require('./routes/blogs');
app.use('/blogs',blogsHandler); // /blogs/ab/cd/, /blogs/ 
// will not work with /blogsabc

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})