//requires
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

//connect database
mongoose.connect('mongodb://localhost/sample', 
    {useUnifiedTopology: true}, 
    (err) => {
        console.log(err ? err : 'connected to database');
    });

//initiations
var app = express();

//middleware
app.use(logger('dev'));

//routes
app.get('/', (req, res) => {
    res.send('welcome'); 
});

//error middlewares
app.use((req, res, next) => {
    res.send('page not found');
    next();
});
app.use((err, req, res, next) => {
    res.send(err);
});

//listener
app.listen(5000, () => {
    console.log('server started at port 5k');
});