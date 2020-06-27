const regitrationService = require('../services/registration');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { body } = require('express-validator');
const { validationResult } = require('express-validator');

module.exports = {
    validate : (method) => {
        switch (method) {
            case 'register': {
            return [
                    body('name').not().isEmpty().withMessage('Name is required')
                   .matches(/^[a-zA-Z ]{2,30}$/).withMessage('Name should be in character'),
                    body('email').not().isEmpty().withMessage('Email is required')
                        .isEmail().withMessage('Invalid Email'),
                    body('phoneNumber').not().isEmpty().withMessage('Phone number is required')
                        .isInt().withMessage('Only numeric allowed')
                        .matches(/^[0-9]{10}$/).withMessage('Invalid Number '),
                      
                    body('password').not().isEmpty().withMessage('Password is required')
                    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).withMessage('Password must be Minimum eight characters, at least one letter and one number ')
                        .isLength({ min:8 }).withMessage('Password must be 5 characters long')
                ]
            }
        }
    },

    register: (req, res) => {
        const bodyData = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           console.log("errors",errors);
           
            console.log(bodyData)
           res.status(422).json({ errors: errors.array({ onlyFirstError: true }) });
            return;
        }
        else{
            regitrationService.register(bodyData).then(result => {
                if(result){
                    res.status(200).json({
                        success: 1,
                        message: "Data inserted successfully...!",
                        data: result
                    })
                }
                else{
                    res.json({
                        success: 0,
                        message: "Failed to insert data..."
                    })
                }
            });
        }
    },

    /*validateLogin : (method) => {
        switch (method) {
            case 'authenticate': {
            return [
                    body('email').not().isEmpty().withMessage('Email is required')
                        .isEmail().withMessage('Invalid Email'),
                        body('password').not().isEmpty().withMessage('Password is required')
                        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).withMessage('Password must be Minimum eight characters, at least one letter and one number ')
                            .isLength({ min:8 } ).withMessage('Password must be 5 characters long')  
                ]
            }
        }
    },

    authenticate: (req, res) => {
        const body = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            //console.log("errors",errors);
            res.status(422).json({ errors: errors.array({ onlyFirstError: true }) });
            return;
        }
        else{
            regitrationService.authenticate(body).then(userInfo => {
                if (userInfo) {
                    bcrypt.compare(body.password, userInfo.password, function(err, isMatch) {
                        if (err) {
                          throw err
                        } else if (!isMatch) {
                            res.json({status:"error", message: "Invalid email/password!!!", data:null});
                        } else {
                            const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '5h' });
                            res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
                        }
                    })
                }
                else{
                    res.json({status:"error", message: 'user not found'}).send();
                }
            });
        }
    }*/
}