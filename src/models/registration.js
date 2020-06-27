const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    phoneNumber:{
        type: Number,
        required: true,
        trim: true
    }
});



const Registration = mongoose.model('registration', registrationSchema);
module.exports = Registration;