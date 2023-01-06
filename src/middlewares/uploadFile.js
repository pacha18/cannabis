const path =require("path");
const multer = require("multer");


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
  
  const upload = multer({ storage: multerStorage ,
    fileFilter:function(req, file, cb){
      const fileExtension = path.extname(file.originalname);
      if(![".jpg",".png",".jpeg"].includes(fileExtension)){
        return cb(null,false);
      }
      else{
      return cb(null,true);}
    },
  });
  module.exports = upload;