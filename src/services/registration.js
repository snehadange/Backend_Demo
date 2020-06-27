const registraionModel = require('../models/registration');

module.exports = {
    register: (data) => {
        return registraionModel.create(data);
    },

  /*  authenticate: (data) => {
        return registraionModel.findOne({email: data.email});
    }*/
}