
const registrationController=require('../controller/registrationcontroller')
const router = require("express").Router();


router.post("/registerUser", registrationController.validate('register'), registrationController.register);
router.get("/product",(req,res)=>{
    res.send('GET request to homepage')
})

module.exports = router;