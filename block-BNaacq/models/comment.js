var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: String,
    author: Schema.Type.user,
    article: Schema.Type.article
}, {timestamp: true});

module.exports = mongoose.model('Comment', commentSchema);
