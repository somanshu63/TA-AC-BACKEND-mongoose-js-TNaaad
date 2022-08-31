var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    village: String,
    city: {type: String, minlength: 5, maxlength: 15},
    state: {type: String, minlength: 5, maxlength: 15},
    pin: Number,
    user: Schema.Types.ObjectId
}, {timestamps: true});

module.exports = mongoose.model('Address', addressSchema);