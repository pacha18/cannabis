const path=require('path');
const fs=require('fs');

const pathJson = path.resolve(__dirname,'../data/products.json');
const productsJson = fs.readFileSync(pathJson,'utf-8');
const products = JSON.parse(productsJson);

let productsController = {
    products: (req,res)=>{
        res.render('products/products',{productos:products})
    },
    detail: (req,res)=>{
        let product = products.find(product=>{
            return product.id == req.params.id;
        })
        if(product==undefined){
            res.render("404");
        }else{
            res.render('products/detail',{producto:product});
        }
       
        
    },
    edit: (req,res)=>{
        let product = products.find(product=>{
            return product.id == req.params.id;
        })
        if(product==undefined){
            res.render('404')
        }else{
            res.render('products/edit',{producto:product});
        }
        
    },
    add: (req,res)=>{
        producto=products
        producto.forEach(element => {
            id=element.id;
        });
        res.render('products/add',{id})
    },
    filter:(req,res)=>{
        const search= req.query.search.toLowerCase();
        let result = products.filter((product)=>product.name.includes(search));
            res.render('products/products',{productos:result})
    
    }
}


module.exports = productsController;