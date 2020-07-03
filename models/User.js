const mongoose= require('mongoose')

const UserSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'Please enter first name'],
        trim: true
    },
    lastName:{
        type: String,
        required:[true,'Please enter last name'],
        trim: true
    },
    email:{
        type:String,
        required:[true,'Please enter email address'],
        trim:true
    },
    password:{
        type: String,
        required:[true,'Please enter password']
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})


module.exports=mongoose.model('User',UserSchema)