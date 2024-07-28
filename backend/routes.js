const router = require('express').Router();

let sundarsathController = require('./Controller/sundarsath');

router.use('/sundarsath', sundarsathController);

module.exports = router;