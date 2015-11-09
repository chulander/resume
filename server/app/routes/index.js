'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/member', require('./member'));
router.use('/experiences', require('./experiences'));
router.use('/social', require('./social'));
router.use('/users', require('./users'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
