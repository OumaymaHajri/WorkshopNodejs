
var mongoose = require('mongoose');
var dbConfig = require('./database/mongodb.json');

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');


const contactRouter = require('./routes/student');

mongoose.set('strictQuery', false);

const connect = mongoose.connect(
    dbConfig.mongo.uri,
    { useNewUrlParser:true,
      useUnifiedTopology: true
    },()=>{console.log("connected to db yey!");});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/student', contactRouter);

app.use((req, res, next)=>{
    next(createError(404))
});

module.exports = app;

