const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/', 
{ 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true 
});

mongoose.Promise = global.Promise;

module.exports = mongoose;