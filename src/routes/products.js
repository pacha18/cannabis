const express = require('express');
const router= express.Router();
const controller = require('../controllers/productsController')

router.get('/',controller.products);
router.get('/detail/:id',controller.detail);
router.get('/edit/:id',controller.edit);
router.get('/add',controller.add);
router.get('/filter',controller.filter);

module.exports = router;