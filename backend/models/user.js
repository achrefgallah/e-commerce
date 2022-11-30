const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, 'please enter your name'],
        maxLength:[30, 'your name must not exceed 30 characters']
    },
    email:{
        type:String,
        require:[true,'please enter your email'],
        unique: true,
        validate:[validator.isEmail, 'please check your email adress']
    },
    password:{
        type:String,
        require:[true, 'please enter your password'],
        minLength:[6, 'your password must be longer than 6 characters'],
        select: false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type: String,
        default: user,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire:Date
})

module.exports = mongoose.model('User', userSchema)