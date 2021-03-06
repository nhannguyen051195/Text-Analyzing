const express= require('express');
const app = express();
const text_analyze=require('./text-analyze/text-analyze');
const morgan = require('morgan');
const bodyParser= require('body-parser')


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', text_analyze);

app.use((req, res, next)=>{
    const error= new Error('not found');
    error.status=404;
    next.error
});
app.use((error, req, res, next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message: error.message
        }
    })
});
module.exports=app;