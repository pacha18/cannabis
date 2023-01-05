const Product = require ("../data/models/Product");

let mainController = {
    home: async (req,res)=>{
        const products = await Product.find()
            
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