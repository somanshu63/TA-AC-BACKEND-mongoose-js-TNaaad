var mongoose = require('mongoose');

var Schema = mongoose.schema;

var userSchema = new Schema({
    name: {type: String},
    email: {type: String, lowercase: true},
    age: {type: Number, value: 0}
});