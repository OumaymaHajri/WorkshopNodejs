const mongoose = require('mongoose');
Schema =mongoose.Schema;

var Student = new Schema(
    {
        Name: String,
        Age:Number,
        Note: Number
    }
);

module.exports = mongoose.model('students', Student);