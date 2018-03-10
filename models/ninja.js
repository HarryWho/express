const mongoose = require('mongoose');
const Schema=mongoose.Schema;
mongoose.Promise = require('bluebird');


// "geometry":{
//     "type":"point",
//     "coordinates":[125.6,10.1]
// };
// create geolocation schema

const GeoSchema = new Schema({
    type :{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
});

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
    },
    "geometry":GeoSchema

});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;