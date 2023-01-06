const express = require('express');
const router= express.Router();


const controller = require('../controllers/productsController');
const upload = require('../middlewares/uploadFile');




router.get('/',controller.products);
router.get('/detail/:id',controller.detail);
router.get('/edit/:id',controller.edit);
router.get('/add',controller.add);
router.post('/add',upload.single("image"),controller.store);
router.post('/edit/:id',controller.update);
router.post('/delete/:id',controller.delete);



module.exports = router;