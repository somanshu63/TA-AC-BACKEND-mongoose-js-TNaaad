//requires
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var user = require('./model/user');

//connect to database
mongoose.connect('mongodb://localhost/sample',
    {useUnifiedTopology: true},
    (err) => {
        console.log(err ? err : 'connected to database');
    });

//initiation
var app = express();


//middlewares
app.use(express.json());


//routes
app.post('/users', (req, res) => {
    user.create(req.body, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

app.get('/users', (req, res) => {
    user.find({}, (err, user) => {
        if (err) return next(err);
        res.json({users: user});
    });
});

app.get('/users/:id', (req, res) => {
    var id = req.params.id;
    // user.findById(id, (err, user) => {
    //   if (err) return next(err);
    //     res.json(user);
    // });
    user.findOne({"_id": `${id}`}, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
    // user.find({"_id": `${id}`}, (err, user) => {
    //   if (err) return next(err);
    //     res.json(user);
    // });
});
//difference between find, findOne and findById is that 
//find gives all the data present in it in array
//findOne gives only 1 matched data in json form
//findById gives using id 

app.put('/users/:id', (req, res) => {
    var id = req.params.id;
    // user.updateOne({"_id": `${id}`}, req.body, {new:true}, (err, updateduser) => {
    //   if (err) return next(err);
    //     user.findOne({"_id": `${id}`}, (err, user) => {
    //     res.json(user);
    // });
    // });
    user.findByIdAndUpdate(id, req.body, {new:true}, (err, updateduser) => {
        if (err) return next(err);
        res.json(updateduser);
    });
    // user.update({"_id": `${id}`}, req.body, {new:true}, (err, updateduser) => {
    //   if (err) return next(err);
    //   user.findOne({"_id": `${id}`}, (err, user) => {
    //         res.json(user);
    //     });
    // });
});

app.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    user.findByIdAndDelete(id, (err, user) => {
        if (err) return next(err);
        res.send("user deleted");
      });
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