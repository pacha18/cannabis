
const {Schema, model} = require ("mongoose");

const Product = new Schema({

    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});
module.exports=model("Product",Product);