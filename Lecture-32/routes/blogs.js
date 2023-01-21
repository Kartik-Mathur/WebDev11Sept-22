const router = require('express').Router();

const blogsHandler = require('../controllers/blogsHandler');
const { route } = require('./main');
router.get('/',blogsHandler.getBlogs);
router.get('/create',blogsHandler.getCreateBlogs);
router.post('/create',blogsHandler.postCreateBlogs);
router.get('/details/:blogId',blogsHandler.getBlogDetails);
router.get('/delete/:blogId',blogsHandler.getDeleteBlog);
router.get('/update/:blogId',blogsHandler.getUpdateBlog);
router.post('/update/:blogId',blogsHandler.getUpdateBlog);

module.exports.router = router;