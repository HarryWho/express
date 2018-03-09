const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String,
        require:[true, 'Username is a required field']
    },
    email:{
        type:String,
        required:[true,'Email is a required field']
    },
    password:{
        type: String,
        required:[true,'You must have a password']
    },
    permission:{
        type:Number
    }
});

const User = mongoose.model('user', UserSchema);
module.exports=User;