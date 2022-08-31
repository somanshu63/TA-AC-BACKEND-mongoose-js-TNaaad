var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
    likes: Number,
    author: Schema.Type.user,
    comments: [String]
}, {timestamp: true});

module.exports = mongoose.model('Article', articleSchema);
