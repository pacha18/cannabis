const express = require('express');
const router= express.Router();
const controller = require('../controllers/mainController')

router.get('/',controller.home);
router.get('/contact',controller.contact);
router.get('/about',controller.about);



module.exports = router;