var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    village: String,
    city: {type: String, required: true},
    state: {type: String, required: true},
    pin: Number,
    user: Schema.Types.ObjectId
}, {timestamps: true});

module.exports = mongoose.model('Address', addressSchema);