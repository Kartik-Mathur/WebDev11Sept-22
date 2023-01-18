const router = require('express').Router();

const mainHandler = require('../controllers/mainHandler');
router.get('/',mainHandler.getMain);

module.exports = router;