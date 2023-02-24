const mongoose = require('mongoose');
Schema =mongoose.Schema;
var Contact = new Schema(
    {
        FullName: String,
        Phone:Number
    }
);

module.exports = mongoose.model('contacts', Contact);