var mongoose = require('mongoose');
var schema = mongoose.schema;

var articleSchema = new Schema({
    title: String,
    description: String
});