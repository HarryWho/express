const mongoose = require('mongoose');
const Schema=mongoose.Schema;

// create nija schema and model
const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Name field is required']
    },
    rank:{
        type:String
    },
    available: {
        type:Boolean,
        default:false
    }
    // add geo location data

});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;