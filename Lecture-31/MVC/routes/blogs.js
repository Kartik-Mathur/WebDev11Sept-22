const router = require('express').Router();

const blogsHandler = require('../controllers/blogsHandler');
router.get('/',blogsHandler.getBlogs);



module.exports.router = router;