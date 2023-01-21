const router = require('express').Router();

const blogsHandler = require('../controllers/blogsHandler');
const { route } = require('./main');
router.get('/',blogsHandler.getBlogs);
router.get('/create',blogsHandler.getCreateBlogs);
router.post('/create',blogsHandler.postCreateBlogs);


module.exports.router = router;