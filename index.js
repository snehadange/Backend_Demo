const express=require('express');
const DB = require('./src/config/database');
const app=express()
const bodyParser=require('body-parser')
const router = require('./src/routers/routers');
const pro_router=require('./src/controller/productController')


port=5000
app.use(bodyParser.json())
DB;
app.use("/src", router);
app.use("/src/products",pro_router)

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 errors
app.use(function(req, res, next) {
    let err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    // handle errors
    app.use(function(err, req, res, next) {
    console.log(err);
    
    if(err.status === 404)
        res.status(404).json({message: "Not found"});
    else 
        res.status(500).json({message: "Something looks wrong :( !!!"});
    });
    
    app.listen(port, () => {
        console.log("we are live on "+port);
    })