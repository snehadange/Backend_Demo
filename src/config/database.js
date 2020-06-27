var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true); //DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead. issue fixed.
mongoose.connect("mongodb://localhost:27017/USER_DATA", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{
     console.log('DB connected...');
 })
module.exports ={
    mongoose
};