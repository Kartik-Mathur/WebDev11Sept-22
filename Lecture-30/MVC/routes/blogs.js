const router = require('express').Router();

let blogs = [
    {
        id: 1,
        username: 'Abhinav',
        blogContent: 'Learning MVC framework'
    },
    {
        id: 2,
        username: 'Yash',
        blogContent: 'Learning NodeJS'
    },
    {
        id: 3,
        username: 'Rahul',
        blogContent: 'Learning Mongo'
    },
    {
        id: 4,
        username: 'Apurba',
        blogContent: 'Learning CSS'
    }
];

const blogsHandler = require('../controllers/blogsHandler');
router.get('/',blogsHandler.getBlogs);
router.get('/createBlog',blogsHandler.getBlogs);
router.get('/deleteBlog',blogsHandler.getDeleteBlog);
router.get('/updateBlog',blogsHandler.getUpdateBlog);



module.exports = router;