//requires
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var schema = mongoose.schema;

var articleSchema = new Schema({
    author: String,
    title: String,
    description: String
});

//connect to database
mongoose.connect("mongodb://127.0.0.1:27017/test", 
    {useUnifiedTopology: true}, 
    (err) => {
        console.log(err ? err: "connected to database");
    });

//initiated app
var app = express();

//middleware
app.use(logger('dev'));

//routes
app.get('/', (req, res) => {
    res.send('welcome');
});

//error middleware
app.use((req, res, next) => {
    res.send('page not found');
});

app.use((err, req, res, next) => {
    res.send(err);
});

//listener
app.listen(4000, () => {
    console.log('server running at port 4k')
});