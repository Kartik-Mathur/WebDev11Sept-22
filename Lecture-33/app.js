const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const path = require('path');
const { mongoConnect } = require("./databases/database");
const User = require('./models/users');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
    User.findById("63ccf2df30750fcb5c2cfc0f")
    .then((user)=>{
        console.log("At Start: ",user);
        req.user = user;
        next();
    }).catch(err=>console.log(err));
})
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

hbs.registerPartials(__dirname + '/views/partials');

// HANDLING REQUESTs
const mainHandler = require('./routes/main');
app.use('/', mainHandler);

// BLOGS CRUD Operation handler
const blogsHandler = require('./routes/blogs').router;
app.use('/blogs', blogsHandler); // /blogs/ab/cd/, /blogs/ 
// will not work with /blogsabc

mongoConnect()
    .then(() => {
        console.log("DB Connection success");
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        })
    })
    .catch(err => console.log(err))
