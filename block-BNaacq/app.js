//requires
var express = require('express');
var mongoose = require('mongoose');

//connected to mongoose
mongoose.connect('mongodb://localhost/sample', 
    {useUnifiedTopology: true}, 
    (err) => {
        console.log(err ? err : "connected true");
    });

//initiated
var app = express();

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('welcome');
});

//error middleware
app.use((req, res, next) => {
    res.send('page not found');
    next();
});
app.use((err, req, res, next) => {
    res.send(err);
});

//listener
app.listen(5000, () => {
    console.log(`server started at port 5k`);
});