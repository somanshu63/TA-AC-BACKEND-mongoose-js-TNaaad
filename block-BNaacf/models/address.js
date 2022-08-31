var mongoose = require('mongoose');

var Schema = mongoose.schema;


var addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Type.ObjectId
});