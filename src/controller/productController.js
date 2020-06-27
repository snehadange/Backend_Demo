const express = require('express');
const mongoose = require('mongoose');
const DB = require('../config/database');
var router = express.Router();
let Product = require('../models/products');


router.route('/show').get((req, res) => {
   
    Product.find()
        .then(product => res.json({
            message:"Get all Data successfully",
            count:product.length,
            data:product
        }))
        .catch(err => res.status(400).json('Error: ' + err));

      

        
});


/*router.get("/", function(req, res, next) {
    db.collection("samplecollection").find({}, function(err, docs) {
      if(err) return next(err);
      docs.each(function(err, doc) {
        if(doc) {
          console.log(doc);
          var response = {
                statusCode: 200,
                headers:  { 'Content-Type': 'application/json' },
                body:    JSON.parse(doc)
              }
          res.send(response);
        }
      });
    });
  });*/


module.exports=router;