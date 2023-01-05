const path =require("path");
const express = require('express');
const router= express.Router();
const multer = require("multer");
const controller = require('../controllers/productsController');

/*multer para poder guardar la imagen y aplicarle extension*/ 
const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/productos');
    },
    filename: function (req, file, cb) {
        const fileExtension=path.extname(file.originalname);
        const randomName = Date.now() +fileExtension;
        cb(null, randomName);
    },
  });
  
  const upload = multer({ storage: multerStorage });



router.get('/',controller.products);
router.get('/detail/:id',controller.detail);
router.get('/edit/:id',controller.edit);
router.get('/add',controller.add);
router.post('/add',upload.single("image"),controller.store);

router.get('/filter',controller.filter);

module.exports = router;