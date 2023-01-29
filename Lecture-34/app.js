const express = require('express');
const app = require('express')();
const mongoose = require('mongoose');
const PORT = 4444;
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.use((req,res,next)=>{
    User.findById('63d4c1426e098b1742cb8cc8')
    .then((user)=>{
        console.log(user);
        req.user = user;
        next();
    })
})

const Blog = require('./models/blogs');
const User = require('./models/users');

app.get('/', (req, res) => {
    res.render('createBlog');
})

app.get('/blog', (req, res) => {
    Blog.find({})
    .populate('userId','username')
    .then((blogs) => {
        // console.log(blogs);
        res.render('showBlogs', {
            blogs
        })
    })
})

app.post('/blog', (req, res) => {
    {
        const { title, blogContent, imageUrl } = req.body;
        console.log(title);
        console.log(blogContent);
        console.log(imageUrl);
        const newBlog = new Blog({
            title: title,
            blogContent,
            imageUrl,
            userId: req.user._id
        });

        newBlog.save()
            .then(() => {
                res.redirect('/blog');
            }).catch(err => console.log(err));
    }
})

app.get('/showdetails/:blogId', (req, res) => {
    const { blogId } = req.params;
    Blog.findById(blogId)
        .then((blog) => {
            // console.log(blog);
            res.render('blogDetails', {
                blog
            })
        })
})

app.get('/update/:blogId',(req,res)=>{
    const { blogId } = req.params;
    Blog.findById(blogId)
        .then((blog) => {
            // console.log(blog);
            res.render('updateDetails', {
                blog
            })
        })
})

app.post('/updateDetails',(req,res)=>{
    const {title,imageUrl,blogContent,blogId} = req.body;
    Blog.findById(blogId)
    .then((blog)=>{
        blog.title = title;
        blog.imageUrl = imageUrl;
        blog.blogContent = blogContent;
        return blog.save();
    }).then(()=>{
        console.log('update success');
        res.redirect('/blog');
    })
})

app.get('/delete/:blogId',(req,res)=>{
    const {blogId} = req.params;
    Blog.findByIdAndDelete(blogId).then(()=>{
        res.redirect('/blog');
    })
})

mongoose
    .connect('mongodb://127.0.0.1:27017/blogs')
    .then(() => {
        // User.create({
        //     username: 'test',
        //     password: 'test'
        // }).then(()=>{
        //     console.log('User created');
        // })
        // .catch(err=>console.log(err));
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch(err => console.log(err));
