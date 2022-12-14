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
        let product = products.find(product=>{
            return product.id == req.params.id;
        })
        if(product==undefined){
            res.render("404");
        }else{
            res.render('detail',{producto:product});
        }
       
        
    },
    edit: (req,res)=>{
        let product = products.find(product=>{
            return product.id == req.params.id;
        })
        if(product==undefined){
            res.render('404')
        }else{
            res.render('edit',{producto:product});
        }
        
    },
    add: (req,res)=>{
        producto=products
        producto.forEach(element => {
            id=element.id;
        });
        res.render('add',{id})
    },
    filter:(req,res)=>{
        let product = products.find(element=>{
            return element.id == req.params.name;
        })
        if(product==undefined){
            res.render('404')
        }else{
            res.render('products',{producto:product});
        }
    }
}


module.exports = productsController;