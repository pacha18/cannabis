const path=require('path');
const fs=require('fs');

const pathJson = path.resolve(__dirname,'../data/products.json');
const productsJson = fs.readFileSync(pathJson,'utf-8');
const products = JSON.parse(productsJson);

let mainController = {
    home: (req,res)=>{
        res.render('home',{productos:products})
    },
    about: (req,res)=>{
        res.render('about')
    },
    contact: (req,res)=>{
        res.render('contact')
    }
   
}


module.exports = mainController;