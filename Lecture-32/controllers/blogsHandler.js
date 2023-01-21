// const blogs = [
//     {
//         id: 1,
//         username: 'Abhinav',
//         blogContent: 'Learning MVC framework'
//     },
//     {
//         id: 2,
//         username: 'Yash',
//         blogContent: 'Learning NodeJS'
//     },
//     {
//         id: 3,
//         username: 'Rahul',
//         blogContent: 'Learning Mongo'
//     },
//     {
//         id: 4,
//         username: 'Apurba',
//         blogContent: 'Learning CSS'
//     }
// ];

const Blogs = require('../models/blogs');

// console.log("Current Blogs: ",blogs);
module.exports.getBlogs = (req, res, next) => {
    Blogs.getBlogs()
        .then((blogs) => {
            res.render('blogsList', {
                blogs
            });
        }).catch(err => console.log(err));
};


module.exports.getCreateBlogs = (req, res, next) => {
    res.render('createBlog');
}


module.exports.postCreateBlogs = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    let newBlog = new Blogs(title, description, imageUrl);
    newBlog
        .save()
        .then((data) => {
            console.log(data);
            res.redirect('/blogs');
        })
        .catch(err => console.log(err));
}
