var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articlesSchema = new Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('Article', articlesSchema);
