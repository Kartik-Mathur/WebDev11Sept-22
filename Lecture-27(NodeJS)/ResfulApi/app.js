const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const path = require('path');

app.use(express.static(path.join(__dirname,'static')));
app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');

const blogs = [
    {
        username: 'Abhinav',
        blogContent: "lorem ipsum, 11 baje wali class 9 se 4 chalao"
    },
    {
        username: 'Yash',
        blogContent: `Vips mei merko maara, bhot maara! Usse mei maar
        se bhi compare nahi kr skta aisa kia mere saath`
    },
    {
        username: 'Bhawansh Baleja',
        blogContent: `DEAR DIARY, aaj papa ne maara, yesterday bhai ne 
        maara tha, ab lagg raha hai mummy bhi maarengi! shayad hi bachu`
    }
]

// GET ALL THE BLOGS
app.get('/blogs',(req,res)=>{
    res.render('blogs',{
        blogs: blogs
    });
})

// CREATE NEW BLOG PAGE
app.get('/blogs/new',(req,res)=>{
    res.render('newBlog');
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})