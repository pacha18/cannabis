const path=require('path');
const fs=require('fs');

const pathJson = path.resolve(__dirname,'../data/products.json');
const productsJson = fs.readFileSync(pathJson,'utf-8');
const products = JSON.parse(productsJson);

let productsController = {
    home: (req,res)=>{
        res.render('home')
    },
    detail: (req,res)=>{
        res.render('detail')
    }
}


module.exports = productsController;