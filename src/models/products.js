const mongoose = require('mongoose');


const Schema = mongoose.Schema;




const produtSchema = new mongoose.Schema({
    name: { 
         type: String,
         required: true
         },
    brand:{
         type: String,
        required:true 
     },
    price:{
       type:Number,
       required:true
    }
  }) 
  var Product = mongoose.model('Product', produtSchema, 'product');
  module.exports=Product;