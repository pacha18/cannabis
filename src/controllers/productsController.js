const path=require('path');
const fs=require('fs');

const pathJson = path.resolve(__dirname,'../data/products.json');
const productsJson = fs.readFileSync(pathJson,'utf-8');
const products = JSON.parse(productsJson);

let productsController = {
    products: (req,res)=>{
        res.render('products',{productos:products})
    },
    detail: (req,res)=>{
        req.params.id
        res.render('detail')
    }
}


module.exports = productsController;