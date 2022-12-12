const path=require('path');
const fs=require('fs');


let mainController = {
    home: (req,res)=>{
        res.render('home')
    },
    about: (req,res)=>{
        res.render('about')
    },
    contact: (req,res)=>{
        res.render('contact')
    }
   
}


module.exports = mainController;