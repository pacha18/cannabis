const mongoose = require('mongoose')

const dbConnect=()=>{
/*Conexion a la base de datos*/ 
mongoose.set("strictQuery",true);
mongoose.connect("mongodb://127.0.0.1:27017/cannabisLibre",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
    function(error,res){
        if(error){
            console.log("Error connection",error);
        }else{
            console.log("Succes Connection");
        }
    });
}
module.exports = dbConnect;