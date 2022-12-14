const express = require ('express');
const app= express();
const path = require('path');
const dbConnect = require("./config/mongo");
/*configuracion del motor de vistas */
app.set('view engine','ejs');
app.set('views', path.resolve(__dirname,'./views'));
/*disponibilizamos las carpeta public de manera publica para poder acceder por cualquier views */
app.use(express.static(path.resolve(__dirname,'../public')));
/*COnfiguracion para poder leer lo que viene por POST*/ 
app.use(express.urlencoded({extended:true}));
/*Sistemas de Rutas Propias*/
const main = require('./routes/main');
app.use('/',main);



const products= require('./routes/products');
app.use('/products',products);


/*Middlware a nivel aplicacion-error 404 */
app.use((req,res,next)=>{
    res.render('404')
})



dbConnect();

/*levantar el servidor */
app.listen(3000,() => console.log('servidor anda!!!'));