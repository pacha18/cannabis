const express = require('express');
const router= express.Router();
const controller = require('../controllers/productsController')

router.get('/',controller.home);
router.get('/detail',controller.detail);

module.exports = router;