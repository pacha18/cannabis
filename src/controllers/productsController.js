const Product = require ("../data/models/Product");

let productsController = {
    products: async (req,res)=>{
        const products = await Product.find()
        res.render('products/products',{productos:products})
    },
    detail: async (req,res)=>{
        try{
        const product = await Product.findById(req.params.id
        )
        res.render('products/detail',{producto:product});
    }
         catch{   
            res.render("404");
        
        }
        
    },
    edit: async (req,res)=>{
        try{
        const product = await Product.findById(req.params.id
        )
        res.render('products/edit',{producto:product});
    }
         catch{   
            res.render("404");
        
        }
        
    },
    add: (req,res)=>{
       
        res.render('products/add');
    },
    store:(req,res)=>{
        const newProduct = {
            ...req.body,
            price:Number(req.body.price),
            image:req.file.filename,
        }
        return res.send("viniste por post");
    },
    filter:(req,res)=>{
        const search= req.query.search.toLowerCase();
        let result = products.filter((product)=>product.name.includes(search));
            res.render('products/products',{productos:result})
    
    }
}


module.exports = productsController;